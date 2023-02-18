import { useEffect, useState, useRef } from "react";
import { useQuery } from "@/hooks/useQuery";
import useClickOutside from "@/hooks/useClickOutside";
import "./style.css";
import HeroBanner from "@/Components/ui/HeroBanner";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Skeleton from "@/utils/Skeleton";
import ProductCard from "@/Components/ui/ProductCard";
import DropDownModal from "@/Components/ui/DropDownModal";
import ProductSideBar from "@/Components/ui/ProductSideBar";
export default function Shop() {
  const ref = useRef();
  const { data } = useQuery("shop_hero_banner");
  const { data: plants } = useQuery("plants");
  const { data: filter } = useQuery("filter");
  const { data: sidebarFilter } = useQuery("sidebar_filter");
  const [modal, setModal] = useState(false);
  const [filtered, setFiltered] = useState();
  const [render, setRender] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [filterBtn, setFilterBtn] = useState("Sort by prodcuts");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useClickOutside(ref, () => setModal(false));

  const handleFilter = (arg) => {
    if (arg.includes("name"))
      setFiltered(plants.sort((a, b) => a.name.localeCompare(b.name)));
    if (arg.includes("price"))
      setFiltered(
        plants.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
    if (arg === "Discounted")
      setFiltered(plants.filter((value) => value.discount));
    if (arg === "Not-Discounted")
      setFiltered(plants.filter((value) => !value.discount));
    if (arg === "Kids" || arg === "Pets")
      setFiltered(plants.filter((value) => value.petFriendly));
    if (arg === "reset") setFiltered(plants);
  };

  useEffect(() => {
    if (!!plants.length) {
      setFiltered(plants);
      setRender(true);
    }
  }, [render, plants]);

  return (
    <div className="productContainer">
      <HeroBanner props={data[0]} />
      <h1>Plants</h1>
      <div className="productWrapper">
        <div className="productSortContainer">
          {!!plants.length ? (
            <>
              <span>{plants.length} Products</span>
              <button
                onClick={() =>
                  !sidebar ? setSidebar(true) : setSidebar(false)
                }
                className="sideBarBtn"
              >
                <MenuOpenIcon />
              </button>
              <div>
                <button
                  onClick={() => {
                    setModal(true);
                  }}
                  className="productSortBtn"
                >
                  <span>{filterBtn}</span>
                  <KeyboardArrowDownIcon />
                </button>
                {modal && (
                  <DropDownModal
                    innerRef={ref}
                    props={filter[0].filter}
                    handleFilter={handleFilter}
                    setModal={setModal}
                    setFilterBtn={setFilterBtn}
                  />
                )}
              </div>
            </>
          ) : (
            <Skeleton width="250px" />
          )}
        </div>
        {!!filteredProducts.length && (
          <div className="productFilterContainer">
            {filteredProducts.map((value, index) => (
              <span key={index}>{value}</span>
            ))}
            <div>|</div>
            <button
              onClick={() => {
                setFilteredProducts([]);
                setFiltered(plants);
              }}
            >
              <ClearIcon />
            </button>
          </div>
        )}
        <div className="productSection">
          <div className={sidebar ? `productFilter` : "productFilterClose"}>
            {sidebar &&
              sidebarFilter &&
              sidebarFilter.map((filter, index) => (
                <ProductSideBar
                  key={index}
                  filter={filter}
                  setFilteredProducts={setFilteredProducts}
                  filteredProducts={filteredProducts}
                  handleFilter={handleFilter}
                />
              ))}
          </div>
          <div className={`productList ${!sidebar ? "Full" : ""}`}>
            {!!plants.length && filtered
              ? filtered.map((item) => (
                  <ProductCard props={item} key={item.id} />
                ))
              : Array(6)
                  .fill(true)
                  .map((_, i) => (
                    <Skeleton width="auto" height="450px" key={i} />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}

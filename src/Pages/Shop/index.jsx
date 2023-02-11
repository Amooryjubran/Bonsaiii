import { useEffect, useState } from "react";
import { useQuery } from "@/hooks/useQuery";
import "./style.css";
import HeroBanner from "@/Components/ui/HeroBanner";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Skeleton from "@/utils/Skeleton";
import ProductCard from "@/Components/ui/ProductCard";
import DropDownModal from "@/Components/ui/DropDownModal";
import ProductSideBar from "@/Components/ui/ProductSideBar";
export default function Shop() {
  const { data } = useQuery("shop_hero_banner");
  const { data: plants } = useQuery("plants");
  const { data: filter } = useQuery("filter");
  const [modal, setModal] = useState(false);
  const [filtered, setFiltered] = useState();
  const [render, setRender] = useState(false);
  const [filterBtn, setFilterBtn] = useState("Sort by prodcuts");

  const handleFilter = (arg) => {
    if (arg.includes("name"))
      setFiltered(plants.sort((a, b) => a.name.localeCompare(b.name)));
    if (arg.includes("price"))
      setFiltered(
        plants.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      );
  };
  useEffect(() => {
    if (!!plants.length) {
      setFiltered(plants);
      setRender(true);
    }
  }, [filtered, render, plants]);
  return (
    <div className="productContainer">
      <HeroBanner props={data[0]} />
      <h1>Plants</h1>
      <div className="productWrapper">
        <div className="productSortContainer">
          {!!plants.length ? (
            <>
              <span>35 products</span>
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

        <div className="productSection">
          <div className="productFilter">
            <ProductSideBar />
          </div>
          <div className="productList">
            {!!plants.length && filtered
              ? filtered.map((item) => {
                  console.log(item);
                  return <ProductCard props={item} key={item.id} />;
                })
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

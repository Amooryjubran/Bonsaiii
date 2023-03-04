import { useEffect, useState, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import CartSidebar from "@/Components/ui/CartSidebar";
import Search from "@/Components/ui/Search";
import { useQuery } from "@/hooks/useQuery";
import Skeleton from "@/utils/Skeleton";
import useCart from "@/store/store";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import useClickOutside from "@/hooks/useClickOutside";

const Navbar = () => {
  const ref = useRef();
  const secondRef = useRef();
  const { data: Routes } = useQuery("routes");
  const [totalQty, setTotalQty] = useState();
  const [cartBar, setCartBar] = useState(false);
  const [search, setSearch] = useState(false);
  const totalqty = useCart((state) => state.totalqty);
  useClickOutside(ref, () => setCartBar(false));
  useClickOutside(secondRef, () => setSearch(false));

  useEffect(() => {
    setTotalQty(totalqty);
  }, [totalqty]);
  return (
    <nav>
      <div className="navList">
        {!!Routes.length ? (
          Routes.map((route, index) => (
            <Link to={route.path === "Bonsaiii" ? "/" : route.path} key={index}>
              <h1>{route.path}</h1>
            </Link>
          ))
        ) : (
          <Skeleton className="skeletonNav" width="250px" />
        )}
      </div>
      <div className="navIcons">
        <button className="searchIcon" onClick={() => setSearch(true)}>
          <SearchIcon />
        </button>
        <button className="cartIcon" onClick={() => setCartBar(true)}>
          <ShoppingCartIcon />
          {totalQty}
        </button>
      </div>
      {cartBar && <CartSidebar innerRef={ref} setCartBar={setCartBar} />}
      {search && (
        <Search search={search} setSearch={setSearch} innerRef={secondRef} />
      )}
    </nav>
  );
};

export default Navbar;

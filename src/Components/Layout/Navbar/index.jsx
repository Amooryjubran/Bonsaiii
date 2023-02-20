import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./style.css";
import { useQuery } from "@/hooks/useQuery";
import Skeleton from "@/utils/Skeleton";
import useCart from "@/store/store";

const Navbar = () => {
  const { data: Routes } = useQuery("routes");
  const totalqty = useCart((state) => state.totalqty);
  const [totalQty, setTotalQty] = useState();

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
        <SearchIcon />
        <div className="cartIcon">
          <ShoppingCartIcon />
          {totalQty}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

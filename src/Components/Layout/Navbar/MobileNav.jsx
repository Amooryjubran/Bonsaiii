import { useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartSidebar from "@/Components/ui/CartSidebar";
import SearchIcon from "@mui/icons-material/Search";
import Search from "@/Components/ui/Search";
import useClickOutside from "@/hooks/useClickOutside";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
export default function MobileNav({
  data,
  setSearch,
  setCartBar,
  totalQty,
  cartBar,
  search,
  secondRef,
  innerRef,
}) {
  const ref = useRef();
  const [menu, setMenu] = useState(false);
  useClickOutside(ref, () => setMenu(false));
  return (
    <nav>
      <Link to="/">
        <h1>Bonsaiii</h1>
      </Link>
      <button className="searchIcon" onClick={() => setSearch(true)}>
        <SearchIcon />
      </button>
      <div className="mobileNavBtns">
        <button onClick={() => setMenu(true)}>
          <MenuIcon />
        </button>
        <button className="cartIcon" onClick={() => setCartBar(true)}>
          <ShoppingCartIcon />
          {totalQty}
        </button>
      </div>
      {menu && (
        <div className="mobileNav" ref={ref}>
          <span>
            <img src={Logo} alt="Logo" />
            <h3>Bonsaiii</h3>
          </span>
          <div className="links">
            {data.map((route, index) => (
              <Link
                to={route.path === "Bonsaiii" ? "/" : route.path}
                key={index}
              >
                <span>{route.path === "Bonsaiii" ? "Home" : route.path}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      {cartBar && <CartSidebar innerRef={innerRef} setCartBar={setCartBar} />}
      {search && (
        <Search search={search} setSearch={setSearch} innerRef={secondRef} />
      )}
    </nav>
  );
}

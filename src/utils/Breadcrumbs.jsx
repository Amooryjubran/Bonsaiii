import { useLocation, NavLink } from "react-router-dom";
import "./breadcrumbs.css";
export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <NavLink to={currentLink}>
            {crumb}
            <span>/</span>
          </NavLink>
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      <NavLink to="/">Home</NavLink>/{crumbs}
    </div>
  );
}

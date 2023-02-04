import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import { Routes } from "../../Routes/routes";
import PropTypes from "prop-types";
import "./style.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navList">
        {Routes.map((route, index) => (
          <Link to={route.path} key={index}>
            <h1>{route.title}</h1>
          </Link>
        ))}
      </div>
      <div className="navIcons">
        <SearchIcon />
        <AppsIcon />
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  Routes: PropTypes.objectOf(
    PropTypes.shape({
      path: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  x: PropTypes.string.isRequired,
};

export default Navbar;

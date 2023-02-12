import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import "./style.css";
import { useQuery } from "@/hooks/useQuery";
import Skeleton from "@/utils/Skeleton";
const Navbar = () => {
  const { data: Routes } = useQuery("routes");
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
        <AppsIcon />
      </div>
    </nav>
  );
};

export default Navbar;
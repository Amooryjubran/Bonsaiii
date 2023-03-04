import Logo from "@/assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
export default function SearchHeader({
  setSearch,
  searchValue,
  setSearchValue,
}) {
  return (
    <nav>
      <Link to="/" onClick={() => setSearch(false)}>
        <img alt="Logo" src={Logo} />
      </Link>
      <div className="searchContainer">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={() => setSearchValue("")}>
          <CloseIcon />
        </button>
      </div>
      <button className="closeSearch" onClick={() => setSearch(false)}>
        Cancel
      </button>
    </nav>
  );
}

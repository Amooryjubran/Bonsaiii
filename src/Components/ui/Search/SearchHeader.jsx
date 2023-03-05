import Logo from "@/assets/logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
export default function SearchHeader({
  data,
  setSearch,
  searchValue,
  setSearchValue,
  filteredData,
  setFilteredData,
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
          onChange={(e) => {
            setSearchValue(e.target.value);
            setFilteredData(
              !e.target.value
                ? data
                : filteredData.filter(
                    (product) =>
                      product.name
                        .toLowerCase()
                        .includes(e.target.value.toLocaleLowerCase()) && product
                  )
            );
          }}
        />
        <button
          onClick={() => {
            setSearchValue("");
            setFilteredData(data);
          }}
        >
          <CloseIcon />
        </button>
      </div>
      <button className="closeSearch" onClick={() => setSearch(false)}>
        Cancel
      </button>
    </nav>
  );
}

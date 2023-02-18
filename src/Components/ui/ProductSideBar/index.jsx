import { useState } from "react";
import "./style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import List from "./List";
export default function ProductSidebar({
  filter,
  setFilteredProducts,
  filteredProducts,
  handleFilter,
}) {
  const [modal, setModal] = useState(false);
  const { title, value } = filter;

  const handleChange = (event) => {
    const { checked, value } = event.currentTarget;
    setFilteredProducts((prev) =>
      checked ? [...prev, value] : prev.filter((val) => val !== value)
    );
  };

  return (
    <div className="sideBarFilter">
      <button onClick={() => (!modal ? setModal(true) : setModal(false))}>
        <h1>{title}</h1>
        <KeyboardArrowDownIcon className={modal ? "arrowDown" : "arrow"} />
      </button>
      {modal && (
        <ul>
          {value.map((values, index) => (
            <List
              key={index}
              values={values}
              handleChange={handleChange}
              filteredProducts={filteredProducts}
              handleFilter={handleFilter}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

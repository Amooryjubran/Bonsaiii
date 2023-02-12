import { useState } from "react";
import "./style.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function ProductSidebar({ props }) {
  const [modal, setModal] = useState(false);
  const { title, value } = props;
  return (
    <div className="sideBarFilter">
      <button onClick={() => (!modal ? setModal(true) : setModal(false))}>
        <h1>{title}</h1>
        <KeyboardArrowDownIcon className={modal ? "arrowDown" : "arrow"} />
      </button>
      {modal && (
        <ul>
          {value.map((values, index) => (
            <li key={index}>
              <input type="checkbox" id={values} value={values} />
              <label htmlFor={values}>{values}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

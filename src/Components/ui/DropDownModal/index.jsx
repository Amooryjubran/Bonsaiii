import "./style.css";
export default function DropDownModal({
  props,
  handleFilter,
  setModal,
  setFilterBtn,
}) {
  return (
    <div className="modal">
      <ul>
        {props.map((btn, index) => (
          <li
            key={index}
            onClick={() => {
              handleFilter(btn);
              setModal(false);
              setFilterBtn(btn);
            }}
          >
            {btn}
          </li>
        ))}
      </ul>
    </div>
  );
}

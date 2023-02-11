import "./style.css";
export default function DropDownModal({
  props,
  handleFilter,
  setModal,
  setFilterBtn,
  innerRef,
}) {
  return (
    <div className="modal" ref={innerRef}>
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

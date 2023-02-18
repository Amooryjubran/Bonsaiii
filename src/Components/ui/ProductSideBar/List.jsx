import { useId } from "react";
export default function List({
  values,
  handleChange,
  filteredProducts,
  handleFilter,
}) {
  const id = useId();
  return (
    <li key={id}>
      <input
        type="checkbox"
        id={values}
        value={values}
        checked={filteredProducts.some((val) => val === values)}
        onChange={(e) => {
          handleChange(e);
          e.target.checked ? handleFilter(values) : handleFilter("reset");
        }}
      />
      <label htmlFor={values}>{values}</label>
    </li>
  );
}

import { useId } from "react";
export default function List({ values, handleChange, filteredProducts }) {
  const id = useId();
  return (
    <li key={id}>
      <input
        type="checkbox"
        id={values}
        value={values}
        checked={filteredProducts.some((val) => val === values)}
        onChange={(e) => handleChange(e, id)}
      />
      <label htmlFor={values}>{values}</label>
    </li>
  );
}

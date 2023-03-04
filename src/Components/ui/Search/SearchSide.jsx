import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function SearchSide({ data, setSearch }) {
  console.log(data);
  return (
    <Fragment>
      <h1>Trending</h1>
      {data.map((product) => (
        <Link
          to={`./shop/` + product.name.split(" ").join("+")}
          key={product.id}
          onClick={() => setSearch(false)}
        >
          {product.name}
        </Link>
      ))}
    </Fragment>
  );
}

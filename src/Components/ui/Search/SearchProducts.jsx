import Skeleton from "@/utils/Skeleton";
import ProductCard from "@/Components/ui/ProductCard";

export default function SearchProducts({ data, setSearch, searchValue }) {
  if (searchValue.length >= 1 && !data.length)
    return (
      <span>
        There is no product <strong>`{searchValue}`</strong>
      </span>
    );
  return (
    <div className="searchProducts">
      {!!data.length
        ? data.map((item) => (
            <ProductCard
              props={item}
              search={true}
              key={item.id}
              setSearch={setSearch}
            />
          ))
        : Array(6)
            .fill(true)
            .map((_, i) => <Skeleton width="auto" height="450px" key={i} />)}
    </div>
  );
}

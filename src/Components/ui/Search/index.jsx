import { useState } from "react";
import useBodyClass from "@/hooks/useBodyClass";
import useLockScroll from "@/hooks/useLockScroll";
import { useQuery } from "@/hooks/useQuery";
import SearchHeader from "./SearchHeader";
import SearchSide from "./SearchSide";
import SearchProducts from "./SearchProducts";
import Skeleton from "@/utils/Skeleton";
import "./style.css";

export default function index({ search, setSearch, innerRef }) {
  const { data } = useQuery("plants");
  const [searchValue, setSearchValue] = useState("");
  useBodyClass("blur");
  useLockScroll();
  if (!data) return <>Loading</>;
  return (
    <div className="searchParent" ref={innerRef}>
      <SearchHeader
        search={search}
        setSearch={setSearch}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="searchWrapper">
        <div className="searchSide">
          {!!data.length ? (
            <SearchSide data={data} setSearch={setSearch} />
          ) : (
            Array(6)
              .fill(true)
              .map((_, i) => (
                <Skeleton width={`${i == 0 ? 2 : i}5%`} height="10px" key={i} />
              ))
          )}
        </div>
        <SearchProducts data={data} setSearch={setSearch} />
      </div>
    </div>
  );
}

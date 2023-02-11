import { useParams } from "react-router-dom";
import { filterArray } from "@/utils/filterArray";
import { useQuery } from "@/hooks/useQuery";
import Breadcrumbs from "@/utils/Breadcrumbs";

export default function Product() {
  const { product } = useParams();
  const { data } = useQuery("plants");
  const path = product.replace(/\+/g, " ");
  let plant = {};
  if (!!data.length) filterArray(data, path, plant);
  return (
    <div>
      Product
      <Breadcrumbs />
    </div>
  );
}

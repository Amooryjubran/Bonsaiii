import { useParams } from "react-router-dom";
import { filterArray } from "@/utils/filterArray";
import { useQuery } from "@/hooks/useQuery";

export default function Product() {
  const { product } = useParams();
  const { data } = useQuery("plants");
  const path = product.replace(/\+/g, " ");
  console.log(path);
  let plant = {};
  if (!!data.length) filterArray(data, path, plant);
  console.log(plant);
  return <div>Product</div>;
}

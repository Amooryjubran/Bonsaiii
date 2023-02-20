import { useParams } from "react-router-dom";
import "./style.css";
import HeroBanner from "@/Components/ui/HeroBanner";
import { filterArray } from "@/utils/filterArray";
import { useQuery } from "@/hooks/useQuery";
import Breadcrumbs from "@/utils/Breadcrumbs";
import ProductHeader from "@/Components/ui/ProductHeader";
export default function Product() {
  const { product } = useParams();
  const { data } = useQuery("plants");
  const path = product.replace(/\+/g, " ");
  let plant = {};
  if (!!data.length) filterArray(data, path, plant);

  return (
    <div className="productPage">
      <HeroBanner props={plant} breadCrumbs={false} />
      <div className="productPageContainer">
        <Breadcrumbs />
        <ProductHeader props={plant} />
      </div>
    </div>
  );
}

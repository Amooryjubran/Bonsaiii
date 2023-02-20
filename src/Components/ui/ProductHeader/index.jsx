import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductHeader({ props }) {
  return (
    <div className="productPageContent">
      <ProductGallery props={props} />
      <ProductInfo props={props} />
    </div>
  );
}

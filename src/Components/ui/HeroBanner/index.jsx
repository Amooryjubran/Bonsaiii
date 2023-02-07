import { Skeleton } from "@mui/material";
import Breadcrumbs from "@/utils/Breadcrumbs";
import "./herobanner.css";
export default function HeroBanner({ props }) {
  return (
    <div className="heroBanner">
      {props ? (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${props?.img})`,
          }}
        >
          <div>
            <h2>{props?.title}</h2>
            <Breadcrumbs />
          </div>
        </div>
      ) : (
        <Skeleton height="700px" width="100%" />
      )}
    </div>
  );
}

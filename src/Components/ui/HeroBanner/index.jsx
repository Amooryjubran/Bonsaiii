import Skeleton from "@/utils/Skeleton";
import Breadcrumbs from "@/utils/Breadcrumbs";
import "./herobanner.css";
export default function HeroBanner({ props, breadCrumbs }) {
  return (
    <div className="heroBanner">
      {props ? (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)),url(${
              props?.img || props?.image
            })`,
          }}
        >
          {breadCrumbs && (
            <div>
              <h2>{props?.title}</h2>
              <Breadcrumbs />
            </div>
          )}
        </div>
      ) : (
        <Skeleton height="500px" width="100%" style={{ marginTop: "-60px" }} />
      )}
    </div>
  );
}

import "./herobanner.css";
export default function HeroBanner({ props }) {
  console.log(props);
  return (
    <div className="heroBanner">
      <div style={{ backgroundImage: `url(${props?.img})` }}>
        <div>
          <h2>{props?.title}</h2>
        </div>
      </div>
    </div>
  );
}

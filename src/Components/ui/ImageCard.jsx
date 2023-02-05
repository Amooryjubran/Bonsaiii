export default function ImageCard({ props }) {
  return (
    <div className="plantCard">
      <div
        className="plantCardContainer"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="plantCardDescreption">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

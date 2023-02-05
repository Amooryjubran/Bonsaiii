export default function ImageCard({ props }) {
  return (
    <div>
      <div
        className="plantCard"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
    </div>
  );
}

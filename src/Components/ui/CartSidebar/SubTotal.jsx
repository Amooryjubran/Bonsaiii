export default function SubTotal({ total }) {
  return (
    <div>
      <span>Your Subtotal is</span>
      <span>{Math.round(total * 100) / 100}</span>
    </div>
  );
}

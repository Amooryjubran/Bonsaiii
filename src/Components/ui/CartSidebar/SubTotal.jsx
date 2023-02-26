export default function SubTotal({ total }) {
  return (
    <div className="subTotal">
      <span>Your Subtotal is</span>
      <strong>${Math.round(total * 100) / 100}</strong>
    </div>
  );
}

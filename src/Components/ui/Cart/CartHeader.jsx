export default function CartHeader({ total, totalQty }) {
  return (
    <div className="CartHeader">
      <h1>YOUR BAG</h1>
      <p>
        Total (<strong>{totalQty}</strong> item{totalQty !== 1 && "s"}){" "}
        <strong>${total}</strong>
      </p>
      <p>
        Items in your bag are not reserved — check out now to make them yours.
      </p>
    </div>
  );
}

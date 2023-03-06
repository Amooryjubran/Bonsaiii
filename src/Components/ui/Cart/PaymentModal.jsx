import useLockScroll from "@/hooks/useLockScroll";

export default function PaymentModal({ innerRef, setPaymentModal }) {
  useLockScroll();
  return (
    <div className="paymentModal" ref={innerRef}>
      <form>
        <h1>Payment Details</h1>
        <p>Still In Progress :(</p>
        <input type="text" placeholder="Name On Card" />
        <div>
          <input type="text" placeholder="💳  Card Number" />
          <input type="text" placeholder="12/2025" />
          <input type="number" placeholder="CVV" />
        </div>
        <h1>Billing Adress</h1>
        <div>
          <input type="text" placeholder="Street Adress" />
          <input type="text" placeholder="City" />
        </div>
        <div>
          <input type="text" placeholder="State/Province" />
          <input type="text" placeholder="Zip Code" />
        </div>
        <div>
          <button
            className="cancelPayment"
            onClick={() => setPaymentModal(false)}
          >
            Cancel
          </button>
          <button className="Conform Payment">Pay</button>
        </div>
      </form>
    </div>
  );
}

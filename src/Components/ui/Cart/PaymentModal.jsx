import useLockScroll from "@/hooks/useLockScroll";

export default function PaymentModal({ innerRef, setPaymentModal }) {
  useLockScroll();
  return (
    <div className="paymentModal" ref={innerRef}>
      <form action="/form/submit" method="get" autocomplete="off">
        <h1>Payment Details</h1>
        <input type="email" placeholder="Name On Card" />
        <div className="paymenModalCreditCard">
          <input type="email" placeholder="💳  Card Number" />
          <input type="email" placeholder="12/2025" />
          <input type="number" placeholder="CVV" />
        </div>
        <h1>Billing Adress</h1>
        <div className="paymenModalAdress">
          <input type="email" placeholder="Street Adress" />
          <input type="email" placeholder="City" />
        </div>
        <div className="paymenModalAdress">
          <input type="email" placeholder="State/Province" />
          <input type="email" placeholder="Zip Code" />
        </div>
        <span>*Still In Progress 😢</span>
        <div className="paymentModalBTNS">
          <button
            className="cancelPayment"
            onClick={() => setPaymentModal(false)}
          >
            Cancel
          </button>
          <button className="confirmPayment">Pay</button>
        </div>
      </form>
    </div>
  );
}

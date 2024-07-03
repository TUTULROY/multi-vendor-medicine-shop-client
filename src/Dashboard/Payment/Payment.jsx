import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                <PaymentForm></PaymentForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
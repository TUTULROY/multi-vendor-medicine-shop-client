import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay"></SectionTitle>
            <div>
                <Elements>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;
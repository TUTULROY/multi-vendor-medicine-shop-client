import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event)=>{
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default PaymentForm;
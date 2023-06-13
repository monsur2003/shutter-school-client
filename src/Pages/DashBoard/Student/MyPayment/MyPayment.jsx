import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import Title from "../../../../Components/Title/Title";

import useClass from "../../../../Hook/useClass";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const MyPayment = () => {
   const { id } = useParams();
   const [myClasses, refetch] = useClass();

   const selectedItem = myClasses.find((singleClass) => singleClass._id == id);

   return (
      <div>
         <Title subHeading="please process" heading="Payment"></Title>

         <Elements stripe={stripePromise}>
            <CheckoutForm selectedItem={selectedItem}></CheckoutForm>
         </Elements>
      </div>
   );
};

export default MyPayment;

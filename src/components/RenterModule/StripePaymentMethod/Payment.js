import React from "react";
import "./styles.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import InjectedCheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IdVtOIgfeCNcULKyHU4wGm30eHziYfOzv6cSgdeB7AaZVilboP0XaeBCG49OxMajE6m9SOnSxQ8VBmyjv1MGdvZ00Z2eb1Yqf"
);

const Payment = (props) => {
  console.log("props:::>>", props);
  return (
    <div className="payment_main">
      <div className="product">
        {/* <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        /> */}
        <div>
          <Elements stripe={stripePromise}>
            <InjectedCheckoutForm
              start_date={props?.start_date}
              end_date={props?.end_date}
              id={props?.id}
              expdata={props?.expdata}
            />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

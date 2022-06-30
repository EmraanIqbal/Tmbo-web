import React, { useState } from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";
import { useDispatch } from "react-redux";
import { dockBooking } from "../../../actions/RenterModuleActions/DockRenterAction/dockRenterAction";
import ThankYouPopup from "../../../Modals/ThankYouPopup/ThankYouPopup";
import { experienceBooking } from "../../../actions/RenterModuleActions/experienceRenterAction/experienceRenterAction";

const CheckoutForm = (props) => {
  console.log("CheckoutForm::>", props);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { stripe, elements } = props;
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    setIsLoading(true);

    const result = await stripe.createToken(card);
    setIsLoading(false);

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
      setIsLoading(true);
      // let data = {
      //   // start_date: singlStartDate,
      //   id: props.id,
      //   start_date: props.start_date,
      //   end_date: props.end_date,
      //   stripe_token: result.token.id,
      // };

      let { id, start_date, end_date, expdata } = props;

      console.log("data::>", expdata, result.token.id);
      // setOpenThankYou(true);
      alert("else");

      if (expdata) {
        alert("if");
        await dispatch(
          experienceBooking(expdata, result.token.id, () => setOpen(true))
        );
      }

      if (start_date) {
        await dispatch(
          dockBooking(id, start_date, end_date, result.token.id, () =>
            setOpen(true)
          )
        );
      }

      // yahan pr thank you page wala model open kesey karwana ha?????
      // data-bs-toggle="modal"
      // data-bs-target="#thankyou_modal"
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading ? <div className="se-pre-con"></div> : ""}

      {/* <div className="product-info">
          <h3 className="product-title">Apple MacBook Pro</h3>
          <h4 className="product-price">$999</h4>
        </div> */}
      <form onSubmit={handleSubmit}>
        <CardSection />
        <button disabled={!props.stripe} className="btn-pay">
          Buy Now
        </button>
      </form>
      <ThankYouPopup open={open} handleClose={handleClose} navigate={"/"} />
    </div>
  );
};

export default function InjectedCheckoutForm(props) {
  console.log("props:::>>", props);

  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm
          stripe={stripe}
          elements={elements}
          start_date={props?.start_date}
          end_date={props?.end_date}
          id={props?.id}
          expdata={props?.expdata}
        />
      )}
    </ElementsConsumer>
  );
}

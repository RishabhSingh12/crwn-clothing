import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/firebase/firebase.utils";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectCartItems } from "../../store/cart/cart.selector";
import { deleteCartItems } from "../../store/cart/cart.action";

import { FormContainer } from "./payment-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentButton, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const cartItems = useSelector(selectCartItems);
  // console.log(currentUser);

  const paymentHandler = async (e) => {
    if (!currentUser) {
      navigate("/auth");
    }
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    // console.log(response);

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    // console.log(paymentResult);

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        // db.collection("users")
        //   .doc(currentUser?.id)
        //   .collection("orders")
        //   .doc(paymentResult.paymentIntent.id)
        //   .set({
        //     cartItems: cartItems,
        //     amount: paymentResult.paymentIntent.amount,
        //     created: paymentResult.paymentIntent.created,
        //   });

        // const orderRef = doc(db, "users", currentUser.id);
        // // .collection("orders");
        // console.log(orderRef);
        // addDoc(orderRef, {
        //   cartItems: cartItems,
        //   amount: paymentResult.paymentIntent.amount,
        //   created: paymentResult.paymentIntent.created,
        // });

        await addDoc(collection(db, "orders"), {
          id: currentUser.id,
          cartItems: cartItems,
          amount: paymentResult.paymentIntent.amount,
          created: paymentResult.paymentIntent.created,
          timestamp: serverTimestamp(),
        });

        alert("Payment Successful!");

        dispatch(deleteCartItems(cartItems));
        navigate("/orders");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessingPayment}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};
export default PaymentForm;

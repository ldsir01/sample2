import React, { useEffect, useState } from "react";
import commerce from "../lib/commerce";

const CheckOut = ({ cart, handleCaptureCart }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });
          console.log(token);
          setCheckoutToken(token);
        } catch {
          // if (activeStep !== steps.length) history.push("/");
        }
      };

      generateToken();
    }
  }, [cart]);

  const handleSubmit = () => {
    const newObject = {
      line_items: cart.line_items,
      customer: {
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
      },
      shipping: {
        name: "John Doe",
        street: "123 Fake St",
        town_city: "San Francisco",
        county_state: "US-CA",
        postal_zip_code: "94103",
        country: "US",
      },
      fulfillment: {
        shipping_method: "ship_7RyWOwmK5nEa2V",
      },
      billing: {
        name: "John Doe",
        street: "234 Fake St",
        town_city: "San Francisco",
        county_state: "US-CA",
        postal_zip_code: "94103",
        country: "US",
      },
      payment: {
        gateway: "stripe",
        card: {
          token: "irh98298g49",
        },
      },
      pay_what_you_want: "149.99",
    };

    handleCaptureCart(checkoutToken, newObject);
  };

  const Form = () => {
    return (
      <>
        <h1>Jujutsu</h1>
        <h1>Naruto</h1>
        <button onClick={handleSubmit}>Pay</button>
      </>
    );
  };

  return (
    <>
      Checkout
      {checkoutToken && <Form />}
    </>
  );
};

export default CheckOut;

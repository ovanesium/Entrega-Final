import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { cartContext } from "../../App";

const AddToCart = ({ title, quantity }) => {
  const { cart, setCart } = useContext(cartContext);

  const addObject = (e) => {
    e.preventDefault();
    const cartIndex = cart.findIndex((obj) => obj.title === title);
    if (cartIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[cartIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { title, quantity }]);
    }

    const newCart = [...cart];
    newCart[0].cant += quantity;
    setTimeout(() => {
      console.log(cart);
    }, 2000);
  };
  return (
    <div>
      <form onSubmit={addObject}>
        <Button type="submit" colorScheme={"green"}>
          Agregar ítem
        </Button>
      </form>
    </div>
  );
};

export default AddToCart;

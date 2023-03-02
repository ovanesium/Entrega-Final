import { Button } from "@chakra-ui/react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";
import db from "../../../db/firebase-config";
import CartWidget from "../CartWidget/CartWidget";

const AddButton = ({ title, price, quantity /*setOrder*/ }) => {
  const createOrder = async (e) => {
    e.preventDefault();
    const order = {
      title: { title },
      price: { price },
      quantity: { quantity },
    };
    const ordersCollectionRef = collection(db, "order");
    await addDoc(ordersCollectionRef, order); //inserta el item en la colección
    //const data = await getDocs(ordersCollectionRef);
    //setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //actualiza el estado de items
  };
  return (
    <div>
      <form onSubmit={createOrder}>
        <Button type="submit" leftIcon={<CartWidget />} colorScheme={"green"}>
          Agregar ítem
        </Button>
      </form>
    </div>
  );
};

export default AddButton;

import { Button } from "@chakra-ui/react";
import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const AddToCart = ({ objects, setObjects, title, quantity }) => {
  const addObject = (e) => {
    e.preventDefault();
    const objectIndex = objects.findIndex((obj) => obj.title === title);
    if (objectIndex !== -1) {
      const updatedObjects = [...objects];
      updatedObjects[objectIndex].quantity += quantity;
      setObjects(updatedObjects);
      console.log(objects);
    } else {
      setObjects([...objects, { title, quantity }]);
      console.log(objects);
    }
  };
  return (
    <div>
      <form onSubmit={addObject}>
        <Button type="submit" leftIcon={<CartWidget />} colorScheme={"green"}>
          Agregar ítem
        </Button>
      </form>
    </div>
  );
};

export default AddToCart;

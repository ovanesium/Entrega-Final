import { addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";

const AddDoc = ({
  coleccion,
  title,
  price,
  description,
  image,
  buttonText,
}) => {
  const createItem = async (e) => {
    e.preventDefault();
    const item = {
      title: { title },
      price: { price },
      description: { description },
      image: { image },
    };
    const itemsCollectionRef = collection(db, { coleccion });
    await addDoc(itemsCollectionRef, item); //inserta el item en la colección
    const data = await getDocs(itemsCollectionRef);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //actualiza el estado de items
  };
  return <button onClick={createItem}>{buttonText}</button>;
};

export default AddDoc;

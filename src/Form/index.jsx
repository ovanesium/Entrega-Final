import db from "../../db/firebase-config.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";

const Form = ({ setItems }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputImage, setInputImage] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    const item = {
      title: inputTitle,
      price: inputPrice,
      category: inputCategory,
      description: inputDescription,
      image: inputImage,
    };
    const itemsCollectionRef = collection(db, "items");
    await addDoc(itemsCollectionRef, item); //inserta el item en la colección
    const data = await getDocs(itemsCollectionRef);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); //actualiza el estado de items
    setInputTitle("");
    setInputPrice("");
    setInputCategory("");
    setInputDescription("");
    setInputImage("");
  };

  return (
    <div>
      <form onSubmit={createItem}>
        <input
          type="text"
          value={inputTitle}
          placeholder="Título"
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          type="number"
          value={inputPrice}
          placeholder="Precio"
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <input
          type="text"
          value={inputCategory}
          placeholder="Categoria"
          onChange={(e) => setInputCategory(e.target.value)}
        />
        <input
          type="text"
          value={inputDescription}
          placeholder="Descripcion"
          onChange={(e) => setInputDescription(e.target.value)}
        />
        <input
          type="text"
          value={inputImage}
          placeholder="url de la imagen"
          onChange={(e) => setInputImage(e.target.value)}
        />
        <button type="submit">Agregar ítem</button>
      </form>
    </div>
  );
};

export default Form;

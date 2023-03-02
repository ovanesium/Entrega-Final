import db from "../../db/firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

const Form = ({ cart }) => {
  const [inputNombre, setInputNombre] = useState("");
  const [inputApellido, setInputApellido] = useState("");
  const [inputTelefono, setInputTelefono] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputReEmail, setInputReEmail] = useState("");

  const createItem = async (e) => {
    e.preventDefault();
    const detalle = [...cart.slice(1)].map((obj) => (obj.title, obj.quantity));
    const item = {
      nombre: inputNombre,
      apellido: inputApellido,
      telefono: inputTelefono,
      email: inputEmail,
      reEmail: inputReEmail,
      createdAt: new Date().toISOString(),
      detalle: detalle,
    };

    const ordersCollectionRef = collection(db, "orders");
    const docRef = await addDoc(ordersCollectionRef, item); //inserta el item en la colección
    alert(
      `Felicidades por tu compra ${item.nombre}, el id de tu orden es ${docRef.id}`
    );

    window.location.reload();
  };

  return (
    <form onSubmit={createItem}>
      <Wrap justify="center" mt={10} ml="30%" mr="30%">
        <WrapItem key={"nombre"}>
          <input
            type="text"
            value={inputNombre}
            placeholder="Nombre"
            onChange={(e) => setInputNombre(e.target.value)}
          />
        </WrapItem>
        <WrapItem key={"apellido"}>
          <input
            type="text"
            value={inputApellido}
            placeholder="Apellido"
            onChange={(e) => setInputApellido(e.target.value)}
          />
        </WrapItem>
        <WrapItem key={"telefono"}>
          <input
            type="text"
            value={inputTelefono}
            placeholder="Telefono"
            onChange={(e) => setInputTelefono(e.target.value)}
          />
        </WrapItem>
        <WrapItem key={"email"}>
          <input
            type="email"
            value={inputEmail}
            placeholder="email"
            onChange={(e) => setInputEmail(e.target.value)}
          />
        </WrapItem>
        <WrapItem key={"reEmail"}>
          <input
            type="email"
            value={inputReEmail}
            placeholder="repetir email"
            onChange={(e) => setInputReEmail(e.target.value)}
          />
        </WrapItem>
        <WrapItem key={"buttonsubmit"}>
          <button type="submit">Agregar ítem</button>
        </WrapItem>
      </Wrap>
    </form>
  );
};

export default Form;

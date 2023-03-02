import db from "../../db/firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

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

    window.location.href = "/";
  };

  return (
    <form onSubmit={createItem}>
      <Flex justify={"center"} key={"nombre"} mt="20">
        <input
          type="text"
          value={inputNombre}
          placeholder="Nombre*"
          onChange={(e) => setInputNombre(e.target.value)}
        />
      </Flex>
      <Flex justify={"center"} key={"apellido"}>
        <input
          type="text"
          value={inputApellido}
          placeholder="Apellido*"
          onChange={(e) => setInputApellido(e.target.value)}
        />
      </Flex>
      <Flex justify={"center"} key={"telefono"}>
        <input
          type="text"
          value={inputTelefono}
          placeholder="Telefono*"
          onChange={(e) => setInputTelefono(e.target.value)}
        />
      </Flex>
      <Flex justify={"center"} key={"email"}>
        <input
          type="email"
          value={inputEmail}
          placeholder="email*"
          onChange={(e) => setInputEmail(e.target.value)}
        />
      </Flex>
      <Flex justify={"center"} key={"reEmail"}>
        <input
          type="email"
          value={inputReEmail}
          placeholder="repetir email*"
          onChange={(e) => setInputReEmail(e.target.value)}
        />
      </Flex>
      <Flex justify={"center"} key={"buttonsubmit"} mb="15" mt="15">
        <button type="submit">FINALIZAR COMPRA</button>
      </Flex>
    </form>
  );
};

export default Form;

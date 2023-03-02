import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../../db/firebase-config.js";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail";
import { Center, Heading } from "@chakra-ui/react";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [existe, setExiste] = useState(true);

  const getItem = async (id) => {
    const itemDocRef = doc(db, "items", id);
    const itemDoc = await getDoc(itemDocRef);
    if (itemDoc.exists()) {
      setItem(itemDoc.data());
    } else {
      setExiste(false);
    }
  };

  useEffect(() => {
    getItem(id);
  }, []);

  return (
    <>
      {existe ? (
        <ItemDetail item={item} key={item.id} />
      ) : (
        <Center mt={40}>
          <Heading> El item no existe </Heading>
        </Center>
      )}
    </>
  );
};

export default ItemDetailContainer;

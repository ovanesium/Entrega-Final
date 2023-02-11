import { useEffect, useState } from "react";
import db from "../db/firebase-config.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartContainer } from "./components/CartWithDivider/CartContainer.jsx";
import { Center } from "@chakra-ui/react";

function App() {
  const [items, setItems] = useState([]);
  const [currentCart, setCurrentCart] = useState([]);
  const itemsCollectionRef = collection(db, "items");
  const [loading, setLoading] = useState(true);

  const getItems = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    const itemDocRef = doc(db, "items", id);
    await deleteDoc(itemDocRef);
    getItems();
  };

  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return (
      <Center>
        <h3>Cargando...</h3>;
      </Center>
    );
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              items={items}
              setItems={setItems}
              greeting={"Bienvenidos a Fast Food Asia"}
            />
          }
        />
        <Route
          path="/category/comidachina"
          element={<ItemListContainer items={items} category={"comidachina"} />}
        />
        <Route
          path="/category/comidajaponesa"
          element={
            <ItemListContainer items={items} category={"comidajaponesa"} />
          }
        />
        <Route
          path="/category/comidacoreana"
          element={
            <ItemListContainer items={items} category={"comidacoreana"} />
          }
        />
        <Route path="/items/:id" element={<ItemDetailContainer />} />
        <Route
          path="/cart"
          element={<CartContainer deleteProduct={deleteProduct} />}
        />
        <Route path="*" element={<h4>404</h4>} />
      </Routes>
    </div>
  );
}

export default App;
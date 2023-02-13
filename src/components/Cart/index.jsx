import { Center, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";

const Cart = ({ objects, items }) => {
  const filterByTitle = (lista, title) => {
    return lista.filter((object) =>
      object.title.toLowerCase().includes(title.toLowerCase())
    );
  };
  console.log(objects);
  return (
    <div>
      {objects.lenght == 0 ? (
        <Center mt={30}>
          <Heading>El carrito está vacio</Heading>
        </Center>
      ) : (
        <ul>
          {objects.map((obj) => (
            <Container key={obj.title}>
              <Image
                src={filterByTitle(items, obj.title)[0].image}
                boxSize="100"
                objectFit="cover"
                alt={`Cargando Imagen...`}
                borderRadius="lg"
              />
              {obj.title}: {obj.quantity}
            </Container>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;

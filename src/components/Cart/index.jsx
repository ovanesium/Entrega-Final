import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, items }) => {
  const filterByTitle = (lista, title) => {
    return lista.filter((object) =>
      object.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  const total = [...cart.slice(1)].reduce(
    (acc, obj) =>
      acc + Number(filterByTitle(items, obj.title)[0].price) * obj.quantity,
    0
  );

  const vaciarCarro = () => {
    alert("Has vaciado el carrito con éxito");
    window.location.href = "/";
  };

  console.log(items);

  return (
    <div>
      {cart[0].cant == 0 ? (
        <Center mt={30}>
          <Heading>El carrito está vacio</Heading>
        </Center>
      ) : (
        <>
          <ul>
            {[...cart.slice(1)].map((obj) => (
              <Flex
                alignItems={"center"}
                ml="30%"
                mr="30%"
                mt="10"
                key={obj.id}
              >
                <Image
                  src={filterByTitle(items, obj.title)[0].image}
                  boxSize="100"
                  objectFit="cover"
                  alt={`Cargando Imagen...`}
                  borderRadius="lg"
                  mr={5}
                />
                {obj.title} x {obj.quantity}
                <Spacer />
                <Text>
                  ${" "}
                  {obj.quantity *
                    Number(filterByTitle(items, obj.title)[0].price)}
                </Text>
              </Flex>
            ))}
          </ul>
          <Flex alignItems={"center"} ml="30%" mr="30%" mt="10">
            <Heading>Total</Heading>
            <Spacer />
            <Text>$ {total}</Text>
          </Flex>
          <Flex alignItems={"center"} ml="30%" mr="30%" mt="10">
            <Button onClick={vaciarCarro}>Vaciar Carrito</Button>
            <Spacer />
            <Link to="/checkout">
              <Button colorScheme={"green"}>Ir al Checkout</Button>
            </Link>
          </Flex>
        </>
      )}
    </div>
  );
};

export default Cart;

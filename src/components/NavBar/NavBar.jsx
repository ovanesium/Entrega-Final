import { Flex, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Flex alignItems={"center"} bgColor={"green.300"}>
      <Spacer />
      <Link to="/">
        <Image boxSize="50" src="https://i.imgur.com/EyaCC7X.png" />
      </Link>
      <Spacer />
      <Link to="category/comidachina">
        <h3>Comida China</h3>
      </Link>
      <Spacer />
      <Link to="category/comidajaponesa">
        <h3>Comida Japonesa</h3>
      </Link>
      <Spacer />
      <Link to="category/comidacoreana">
        <h3>Comida Coreana</h3>
      </Link>
      <Spacer />
      <Link to="/cart">
        <CartWidget />
      </Link>
      <Spacer />
    </Flex>
  );
};

export default NavBar;

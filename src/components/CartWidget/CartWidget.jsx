import { Badge, Container } from "@chakra-ui/react";
import { useContext } from "react";
import { RiShoppingCartLine } from "../../../node_modules/react-icons/ri";
import { cartContext } from "../../App";

const CartWidget = () => {
  const { cart } = useContext(cartContext);
  return (
    <Container mt={5}>
      <RiShoppingCartLine size={28} />
      <Badge
        mt="-8"
        ml="7"
        borderRadius="full"
        fontWeight="bold"
        fontSize="xs"
        variant="solid"
        colorScheme="blue"
      >
        {cart[0].cant}
      </Badge>
    </Container>
  );
};

export default CartWidget;

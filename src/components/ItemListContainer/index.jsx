import { Center, Heading, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Item from "../Item";

const ItemListContainer = ({ items, greeting, category = "all" }) => {
  return (
    <>
      <Center>
        <Heading>{greeting}</Heading>
        {greeting && (
          <Image boxSize="100" src="https://i.imgur.com/EyaCC7X.png" ml={5} />
        )}
      </Center>
      <Wrap justify="center">
        {items.map((item) => {
          return (
            (item.category == category || category == "all") && (
              <WrapItem key={item.id}>
                <Link to={`/items/${item.id}`} key={item.id}>
                  <Item item={item} key={item.id} />
                </Link>
              </WrapItem>
            )
          );
        })}
      </Wrap>
    </>
  );
};

export default ItemListContainer;

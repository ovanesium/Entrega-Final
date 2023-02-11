import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Center,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import ItemCounter from "../ItemCounter";

const Item = ({ item, deleteProduct }) => {
  const [value, setValue] = useState(1);
  const handleChange = (value) => setValue(value);

  return (
    <Center mb={5}>
      <Card w={"sm"}>
        <CardBody>
          <Center>
            <Image
              boxSize="345"
              objectFit="cover"
              src={item.image}
              alt={`Cargando Imagen...`}
              borderRadius="lg"
            />
          </Center>
          <Stack mt="6" spacing="3">
            <Heading size="md">{item.title}</Heading>
            <Text color="green.500" fontSize="2xl">
              ${item.price}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Item;

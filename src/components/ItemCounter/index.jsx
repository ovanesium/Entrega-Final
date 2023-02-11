import React, { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const ItemCounter = ({ value, handleChange }) => {
  return (
    <NumberInput
      size="md"
      maxW={24}
      value={value}
      onChange={handleChange}
      min={1}
      max={20}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default ItemCounter;

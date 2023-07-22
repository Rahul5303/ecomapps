import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleData } from "../api/api";
import { Box, Button, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../Pages/Navbar";

const ProductDetails = () => {
  const [data, setData] = useState({});

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  // const params= useParams();
  // console.log(params);

  useEffect(() => {
    singleData({ id }) // singleData coming from api.js file
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // to chnage the quantity of the product 

  const handleQuantityChange = (value) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + value));
  };

   // Calculate total price based on quantity
   const totalPrice = data.price * quantity;


  // taking a button size and use break point value to chnage the size accoording that 

  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  return (
    <Box>
      {/* catch the data using map method */}
      <Navbar />
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={8}>
        <Image
          src={data.image}
          alt={data.name}
          width="100%"
          height="500px"
          objectFit="cover"
          borderRadius="md"
        />

        <Text mt={2} fontSize="xl" fontWeight="semibold">
          {data.name}
        </Text>
        <Text fontSize="lg">Price:₹{data.price}</Text>
      </SimpleGrid>

      {/* for adding the quantity of the product and according price will incarese or deccrease */}

      <Box mt={4}>
          <Button
            size={buttonSize}
            onClick={() => handleQuantityChange(-1)}
            mr={2}
            disabled={quantity === 1}
          >
            -
          </Button>
          <Text as="span" fontSize="lg" fontWeight="semibold" mx={2}>
            {quantity}
          </Text>
          <Button size={buttonSize} onClick={() => handleQuantityChange(1)} ml={2}>
            +
          </Button>
          <Text mt={2} fontSize="lg">
          Total Price: ₹{totalPrice}
        </Text>
        </Box>
    </Box>
  );
};

export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { singleData } from "../api/api";
import { Box, Button, Flex, Image, Text, useToast, useMediaQuery } from "@chakra-ui/react";
import Navbar from "../Pages/Navbar";

const ProductDetails = () => {
  const [data, setData] = useState({});

  const { id } = useParams();

  const toast = useToast();
  const navigate = useNavigate();

  // Check if the screen size is mobile or tablet
  const [isMobileOrTablet] = useMediaQuery("(max-width: 768px)");

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

  const handleAddToCart = () => {
    // Get the existing cart items from local storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCartItems.some((item) => item.id === data.id);

    if (isProductInCart) {
      toast({
        title: "Product already added to the cart!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    } else {
      // If the product is not in the cart, add it to the cart items array
      const cartItem = {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.image,
      };
      existingCartItems.push(cartItem);

      // Save the updated cart items back to local storage
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

      toast({
        title: "Product added to the cart!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      navigate("/cart");
    }
  };

  return (
    <Box>
      <Navbar />
      <Flex flexWrap="wrap" justifyContent="space-between" mt={8}>
        {/* Product Image */}
        <Image
          src={data.image}
          alt={data.name}
          width={isMobileOrTablet ? "100%" : "50%"}
          height={isMobileOrTablet ? "300px" : "500px"}
          objectFit="cover"
          borderRadius="md"
        />

        {/* Product Details */}
        <Box mt={isMobileOrTablet ? 4 : 0} ml={isMobileOrTablet ? 0 : 4} width={isMobileOrTablet ? "100%" : "40%"}>
          <Text fontSize="xl" fontWeight="semibold" mb={2}>
            {data.name}
          </Text>
          <Text fontSize="lg">Price: ₹{data.price}</Text>
          <Button
            colorScheme="teal"
            onClick={handleAddToCart}
            mt={4}
            width={isMobileOrTablet ? "100%" : "auto"}
          >
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetails;

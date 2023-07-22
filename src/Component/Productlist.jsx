import React, { useEffect, useState } from "react";
import { getData } from "../api/api";
import { Box, Image,  SimpleGrid,  Text, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const Productlist = () => {

  // useState to getData and map the data 
  const [data, setData] = useState([]);

  // useEffect to act as dependency we use to pass the data here to append the data over here

  useEffect(() => {
    getData()  //import function getData is coming from api.js file 
      .then((res) => {
        console.log(res);
        setData(res);  // setData and they give us a data 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
  <Box>
    {/* catch the data using map method */}
    <Navbar/>
    <SimpleGrid columns={[1, 2, 3,4]} spacing={8} mt={8}>
    {
      data.map((item)=>{
        return <Box key={item.id}>
          {/* <LinkOverlay as={Link} to={`/products/${id}`}> */}
          <Image src={item.image} alt={item.name} width="100%"
                height="500px"
                objectFit="cover"
                borderRadius="md" />
          {/* </LinkOverlay> */}
          <Text mt={2} fontSize="xl" fontWeight="semibold">{item.name}</Text>
          <Text fontSize="lg">Price:₹{item.price}</Text>
        </Box>
      })
    }
    </SimpleGrid>
  </Box>
  );
};

export default Productlist;

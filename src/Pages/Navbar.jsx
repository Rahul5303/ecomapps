import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      bg={colorMode === "light" ? "#bca9d9" : "gray.800"}
      px={4}
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex
        h={isMobile ? "auto" : 20}
        flexWrap="wrap"
        alignItems={isMobile ? "flex-start" : "center"}
        justifyContent={isMobile ? "flex-start" : "space-between"}
        p={isMobile ? 4 : 0}
        mt={isMobile ? 4 : 0}
        ml={isMobile ? 4 : "40px"}
      >
        <Heading>E-Commerce</Heading>
        {isMobile ? (
          <Button
            onClick={handleToggle}
            bg="transparent"
            p={0}
            display="flex"
            alignItems="center"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Button>
        ) : (
          <Box
            mt={isMobile ? 4 : 0}
            mr={isMobile ? 4 : 0}
            display={isMobile ? "none" : "block"}
          >
            <Button colorScheme="teal" variant="ghost">
              <Link to="/">ProductList</Link>
            </Button>
          </Box>
        )}
        <Button onClick={toggleColorMode} ml={isMobile ? 4 : 0}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      {isOpen && (
        <Box>
          <Button colorScheme="teal" variant="ghost" width="100%" my={2}>
            <Link to="/">ProductList</Link>
          </Button>
          <Button colorScheme="teal" variant="ghost" width="100%" my={2}>
            <Link to="/cart">Cart</Link>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;


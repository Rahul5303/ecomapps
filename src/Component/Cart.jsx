// import { Box, Image, SimpleGrid, Text, Button } from '@chakra-ui/react';
// import React, { useState, useEffect } from 'react';
// import Navbar from '../Pages/Navbar';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Get cart items from local storage on component mount
//     const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//     setCartItems(storedCartItems);
//   }, []);

//   const updateQuantity = (itemId, quantity) => {
//     const updatedCartItems = cartItems.map((item) =>
//       item.id === itemId ? { ...item, quantity } : item
//     );
//     setCartItems(updatedCartItems);
//     localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <Box>
//       <Navbar />
//       <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={8}>
//         {cartItems.map((item) => (
//           <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
//             <Image src={item.image} alt={item.name} width="100%" height="200px" objectFit="cover" />
//             <Text mt={2} fontSize="xl" fontWeight="semibold">
//               {item.name}
//             </Text>
//             <Text fontSize="lg">Price: ₹{item.price}</Text>
//             <Box mt={2}>
//               <Text fontSize="md">Quantity:</Text>
//               <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
//               <Text display="inline-block" mx={2} fontWeight="semibold">
//                 {item.quantity}
//               </Text>
//               <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
//             </Box>
//             <Text fontSize="lg" mt={2}>
//               Total Price: ₹{item.price * item.quantity}
//             </Text>
//           </Box>
//         ))}
//       </SimpleGrid>
//       <Box mt={8} textAlign="center">
//         <Text fontSize="xl" fontWeight="semibold">
//           Total Cart Price: ₹{getTotalPrice()}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default Cart;

import { Box, Image, SimpleGrid, Text, Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Navbar from '../Pages/Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const updateQuantity = (itemId, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box>
      <Navbar />
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={8} mt={8}>
        {cartItems.map((item) => (
          <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={item.image} alt={item.name} width="100%" height="200px" objectFit="cover" />
            <Text mt={2} fontSize="xl" fontWeight="semibold">
              {item.name}
            </Text>
            <Text fontSize="lg">Price: ₹{item.price}</Text>
            <Box mt={2}>
              <Text fontSize="md">Quantity:</Text>
              <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
              <Text display="inline-block" mx={2} fontWeight="semibold">
                {item.quantity}
              </Text>
              <Button size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
            </Box>
            <Text fontSize="lg" mt={2}>
              Total Price: ₹{item.price * item.quantity}
            </Text>
            <Button colorScheme="red" onClick={() => removeItem(item.id)} mt={2}>
              Remove
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <Box mt={8} textAlign="center">
        <Text fontSize="xl" fontWeight="semibold">
          Total Cart Price: ₹{getTotalPrice()}
        </Text>
      </Box>
    </Box>
  );
};

export default Cart;





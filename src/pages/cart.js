import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { shopContext } from "../Context/shop-context";
import Products from "../products";
import CartItems from "../components/Cartitems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const {cartItem, getTotalCartAmount} = useContext(shopContext)
    const totalAmount = getTotalCartAmount()
    const navigate = useNavigate()
    return (
        <div className="cart">
            <Flex direction="column"
                  justify="center" 
                  align="center"
                  >
            <Box>
                <Text textAlign="center"
                      fontSize="42px" 
                      p="20px" 
                      fontWeight="bold"
                      >Your Cart Items</Text>
            </Box>
            <Box>
                {Products.map((product) => {
                    if(cartItem[product.id] !== 0 ) {
                        return (
                        <CartItems data={product}
                                   key={product.id}
                         />
                        ) 
                    }
                })}
            </Box>
            {totalAmount > 0 ?
              <Box>
                <Text fontSize="20px" fontWeight="700" >Subtotal: ${totalAmount}</Text>
                <Button w="150px"
                        h="50px" 
                        bg="black" 
                        color="white" 
                        border="none" 
                        borderRadius="8px" 
                        m="10px" 
                        _hover={{bg: 'white',
                            color:' black',
                            border: '2px',
                            borderColor: 'black'
                           }}
                        onClick={() => navigate("/")}
                >Continue Shopping</Button>
                <Button w= "150px"  
                        h="50px" 
                        bg="black" 
                        color="white" 
                        border="none" 
                        borderRadius="8px" 
                        m="10px"
                        _hover={{bg: 'white',
                            color:' black',
                            border: '2px',
                            borderColor: 'black'
                           }}
                        >Checkout</Button>
              </Box>
              : <Text fontSize="30px" fontWeight="700">Your Cart is Empty</Text> }
            </Flex>
        </div>
     );
}
 
export default Cart;
/* import { Link } from "react-router-dom"; */
import {ShoppingCart} from "phosphor-react"
import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links" >
            <Box w="100%"  >
            <Flex justify="flex-end" fontSize="30px"  bg="black" color="white" pt="30px" pr="80px" fontWeight="bold"  w="100%" >
            <Link to="/"  >Shop</Link>
            <Link to="/cart" > <ShoppingCart size={32}/> </Link>
            </Flex>
            </Box>
        </div>
        </div>
     );
}
 
export default Navbar;
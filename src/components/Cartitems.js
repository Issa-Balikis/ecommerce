import { Box, Button, Flex, Img, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { shopContext } from "../Context/shop-context";

const CartItems = (props) => {
    const {cartItem,addToCart, removeFromCart, updateCartItemCount} = useContext(shopContext)

    const { id, productName, productImage, price} = props.data
    return ( 
        <div className="cartitems">
            <Flex width={['300px', '350px', '700px']}
                  height="250px" 
                  align="center" 
                  boxShadow="0px 3px 15px rgba(0, 0, 0, 0.2)" borderRadius="25px" 
                  m="30px">
            <Img src={productImage} alt="" width={[ '150px', '150px', "200px"]} />
            <div className="desc">
            <Box width="100%" fontSize={[ '20px', '20px', '30px']}>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            <Box>
                <Button onClick={() => removeFromCart(id)}> - </Button>
                <Input width="50px"
                       textAlign="center"
                       fontWeight="bolder"
                       color="black"
                       value={cartItem[id]} 
                       onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <Button onClick={() => addToCart(id) }> + </Button>
            </Box>
            </Box>   
            </div>
            </Flex>
        </div>
     );
}
 
export default CartItems;
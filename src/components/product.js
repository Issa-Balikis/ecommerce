import { Box, Button, Img } from "@chakra-ui/react";
import { shopContext } from "../Context/shop-context";
import { useContext } from "react";

const Product = (props) => {
    const { id, productName, price, productImage } = props.data
    const { addToCart, cartItem} = useContext(shopContext)
    const cartItemAmount = cartItem[id]
    return (
        <div className="product">
            <Img src={productImage} alt="" w={[200, 200, 400]}/>
            <div className="desc">
           <Box textAlign="center" fontSize={['18px','18px',"20px"]}>
            <p>
                <b>{productName}</b>
            </p>
            <p>${price}</p>
            </Box>
            <Box textAlign="center" pt="20px">
            <Button className="btn"
                    size="md"
                    bg='transparent'
                    border='2px' 
                    borderColor='black' 
                    borderRadius='20px' 
                    _hover={{bg: 'black',
                            color:' white'
                           }}
                onClick={() => addToCart(id)}           
                    >Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                    </Button>
            </Box>
            </div>
        </div>
     );
}
 
export default Product;
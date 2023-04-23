import { Text } from "@chakra-ui/react";
import Products from "../products";
import Product from "../components/product";
import "./shop.css";

const Shop = () => {
    return (
        <div className="shop">
            <Text fontSize={['30px','30px', "48px"]} textAlign="center" fontWeight="700" p="30px">Shuga Electronics</Text>
            <div className="products">
                {Products.map((product) => {
                return(
                   <Product data={product} 
                            key={product.id}
                   />
                    )
                })}
            </div>
        </div>
     );
}
 
export default Shop;
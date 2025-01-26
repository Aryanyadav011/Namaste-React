import { useDispatch, } from "react-redux";
import  { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const dispatch =useDispatch();
    const handleClearCart=() =>{
        dispatch(clearCart());
    }
    


    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg "
            onClick={handleClearCart}
            > 
            Clear cart
            </button>

            {/* {items.length === 0 && (
                <h1>Cart is empty. Add item to the cart</h1>
            )} */}
           
       
    

        </div>
    );
};
export default Cart;
import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="w-6/12 m-auto">
      <h1 className="text-center font-bold text-xl m-4">Cart</h1>
      <div>
        {cartItems.length > 0 ? (
          <div>
            <button
              className="text-center px-[15px] bg-black text-white rounded-lg border-[1px] border-[grey]"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <ItemsList items={cartItems} />
          </div>
        ) : (
          <h6 className="text-center font-semibold text-xl m-4">
            Oops! Your cart is empty
          </h6>
        )}
      </div>
    </div>
  );
};

export default Cart;

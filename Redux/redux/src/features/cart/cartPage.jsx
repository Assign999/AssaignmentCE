import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartSlice';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name} - ${item.price}</p>
          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
            }
          />
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartPage;

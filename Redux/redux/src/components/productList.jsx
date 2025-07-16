import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'Shirt', price: 25 },
  { id: 2, name: 'Pants', price: 40 },
  { id: 3, name: 'Shoes', price: 80 },
  { id: 4, name: 'Hat', price: 15 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(prod => (
        <div key={prod.id}>
          <span>{prod.name} - ${prod.price}</span>
          <button onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

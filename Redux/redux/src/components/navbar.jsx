import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalItems = useSelector(state => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav>
      <h2>Shop</h2>
      <div>
        🛒 Cart ({totalItems})
        <h1>Redux Shop</h1>
      </div>
    </nav>
  );
};
export default  Navbar;

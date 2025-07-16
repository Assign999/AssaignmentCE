import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const totalItems = useSelector(state => 
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (

      <nav style={{ padding: '2rem', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
      <Link to="/cart">🛒 Cart ({totalItems})</Link>
    </nav>
    
  );
};
export default  Navbar;

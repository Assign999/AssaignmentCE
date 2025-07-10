import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <Link style={{ fontWeight: pathname === '/' ? 'bold' : 'normal' }} to="/">Home</Link> | 
      <Link style={{ fontWeight: pathname === '/about' ? 'bold' : 'normal' }} to="/about">About</Link> | 
      <Link style={{ fontWeight: pathname.startsWith('/dashboard') ? 'bold' : 'normal' }} to="/dashboard">Dashboard</Link> | 
      <Link style={{ fontWeight: pathname === '/login' ? 'bold' : 'normal' }} to="/login">Login</Link>
    </nav>
  );
};
export default Navbar;

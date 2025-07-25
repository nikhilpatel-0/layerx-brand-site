// App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import MarqueeBanner from './components/MarqueeBanner';
import Login from './pages/LoginSignup';
import Cart from './pages/Cart';

function App() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
         
         <Route path="/login" element={<Login />} />
      </Routes>
      {!isAboutPage && <MarqueeBanner />}
      <Footer />
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'; // ✅ Corrected Path
import Products from "./pages/Products";
import ProductDetail from './pages/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

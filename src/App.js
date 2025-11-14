import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Contacts from './pages/Contacts/Contacts.jsx';
import FAQ from './pages/Faq/Faq.jsx';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Catch-all route */}
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Cart} from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import { ShopContextProvider } from "./helpers/ShopContex";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
        </ShopContextProvider>
    </div>
  );
}

export default App;
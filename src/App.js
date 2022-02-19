import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Dashboard/Dashboard";
import Contact from "./components/Contact/Contact";
import Error from "./components/Home/Error/Error";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home";
import Menubar from "./components/Home/Menubar/Menubar";
import Services from "./components/Home/Services/Services";
import SingleService from "./components/Home/Services/SingleService/SingleService";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import ProductsDetails from "./components/Shop/ProductsDetails/ProductsDetails";
import OrderPlace from "./components/OrderPlace/OrderPlace";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="services" element={<Services />} />

          <Route path="productsDetails/:productId" element={<ProductsDetails />} />
          <Route path="orderPlace/:productId" element={<OrderPlace />} />
          <Route path="dashboard" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="singleService/:id" element={<SingleService />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

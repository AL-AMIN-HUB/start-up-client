import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
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
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Shop />} />
            <Route path="services" element={<Services />} />

            <Route path="productsDetails/:productId" element={<ProductsDetails />} />
            <Route
              path="orderPlace/:productId"
              element={
                <PrivateRoute>
                  <OrderPlace />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<Orders />} />
              <Route path={`/dashboard/allOrders`} element={<Orders />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="singleService/:id" element={<SingleService />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

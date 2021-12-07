import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Error from "./components/Home/Error/Error";
import Footer from "./components/Home/Footer/Footer";
import Home from "./components/Home/Home";
import Menubar from "./components/Home/Menubar/Menubar";
import Monthly from "./components/Home/Monthly/Monthly";
import Services from "./components/Home/Services/Services";
import SingleService from "./components/Home/Services/SingleService/SingleService";
import Yearly from "./components/Home/Yearly/Yearly";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";
import Shop from "./components/Shop/Shop";
import Support from "./components/Support/Support";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />}>
            <Route path="/month" element={<Monthly />} />
            <Route path="/year" element={<Yearly />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/singleService/:id" element={<SingleService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

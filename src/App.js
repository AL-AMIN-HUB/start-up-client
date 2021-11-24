import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "swiper/css/bundle";
import About from "./components/About/About";
import Error from "./components/Home/Error/Error";
import Home from "./components/Home/Home";
import SingleService from "./components/Home/Services/SingleService/SingleService";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/singleService/:id" element={<SingleService />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Error from "./components/Home/Error/Error";
import Home from "./components/Home/Home";
import Monthly from "./components/Home/Monthly/Monthly";
import SingleService from "./components/Home/Services/SingleService/SingleService";
import Yearly from "./components/Home/Yearly/Yearly";
import Login from "./components/Shared/Login/Login";
import Register from "./components/Shared/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />}>
            <Route path="/month" element={<Monthly />} />
            <Route path="/year" element={<Yearly />} />
          </Route>
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

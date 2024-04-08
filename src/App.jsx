import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/Footer";
import Flights from "./pages/Flights";

//import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flights />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";

//import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

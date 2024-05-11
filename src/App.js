import "./App.css";
import History from "./Components/History";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import Promos from "./Components/Promos";
import Settings from "./Components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/history" element={<History />} />
          <Route path="/promos" element={<Promos />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

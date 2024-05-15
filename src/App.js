import "./App.css";
import History from "./Components/History";
import Home from "./Components/Home";
import Stock from "./Components/Stock";
import Navbar from "./Components/Navbar";
import Promos from "./Components/Promos";
import Settings from "./Components/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className="App"
      style={{ background: theme === "dark" ? "#1F2029" : "#a0d8ef" }}
    >
      <BrowserRouter className="App">
        <ThemeContext.Provider value={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/history" element={<History />} />
            <Route path="/promos" element={<Promos/>} />
            <Route
              path="/settings"
              element={<Settings setTheme={setTheme} />}
            />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

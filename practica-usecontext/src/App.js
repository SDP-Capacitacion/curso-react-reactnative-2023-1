import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import CardDetails from "./components/CardDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

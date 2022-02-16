import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Proxy from "./setupProxy";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>

      <Routes>
        <Route path="/2" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}


export default App;

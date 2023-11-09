import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Products />}/>
            <Route path="/admin/login" element={<Login />}/>
            <Route path="/admin/register" element={<Register />}/>
            <Route path="/admin/dashboard" element={<Dashboard />}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

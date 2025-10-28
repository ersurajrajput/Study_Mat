import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

// Import your pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />         {/* Home Page */}
        <Route path="/about" element={<About />} />   {/* About Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Page */}
        <Route path="/login" element={<Login />} />   {/* Login Page */}
        <Route path="/signup" element={<Signup />} />   {/* Signup Page */}
        <Route path="/forget-password" element={<ForgetPassword />} />   {/* Forget Password Page */}
        <Route path="*" element={<NotFound />} />     {/* 404 Page */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;

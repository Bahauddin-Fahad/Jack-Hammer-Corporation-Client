import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Signup from "./Pages/CustomerLogin/Signup";
import Login from "./Pages/CustomerLogin/Login";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Reviews from "./Pages/Reviews/Reviews";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/ForUsers/MyOrders";
import AddAReview from "./Pages/Dashboard/ForUsers/AddAReview";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Pages/CustomerLogin/RequireAuth";
import RequireAdmin from "./Pages/CustomerLogin/RequireAdmin";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Signup from "./Pages/CustomerLogin/Signup";
import Login from "./Pages/CustomerLogin/Login";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import MyProfile from "./Pages/MyProfile/MyProfile";
import Reviews from "./Pages/Reviews/Reviews";
import Purchase from "./Pages/Home/Purchase/Purchase";
import NotFound from "./Pages/Shared/NotFound";
import { ToastContainer } from "react-toastify";
import MakeAdmin from "./Pages/Dashboard/ForAdmins/MakeAdmin";
import AddATool from "./Pages/Dashboard/ForAdmins/AddATool";
import ManageTools from "./Pages/Dashboard/ForAdmins/ManageTools";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/purchase/:toolId"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="addReview" element={<AddAReview />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="addTool"
            element={
              <RequireAdmin>
                <AddATool />
              </RequireAdmin>
            }
          />
          <Route
            path="manageTools"
            element={
              <RequireAdmin>
                <ManageTools />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myportfolio" element={<MyPortfolio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

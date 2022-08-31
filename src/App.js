import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
import Purchase from "./Pages/Home/Purchase/Purchase";
import NotFound from "./Pages/Shared/NotFound";
import { ToastContainer } from "react-toastify";
import MakeAdmin from "./Pages/Dashboard/ForAdmins/MakeAdmin";
import AddATool from "./Pages/Dashboard/ForAdmins/AddATool";
import ManageTools from "./Pages/Dashboard/ForAdmins/ManageTools";
import ManageAllOrders from "./Pages/Dashboard/ForAdmins/ManageAllOrders";
import Payment from "./Pages/Dashboard/ForUsers/Payment";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import ReviewsComp from "./Pages/Reviews/ReviewsComp";
import { useEffect } from "react";
import OrderTools from "./Pages/Home/OrderTools";
AOS.init();

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App bg-gray-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orderTools" element={<OrderTools />} />
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
          <Route path="payment/:orderId" element={<Payment />} />
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
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />
        </Route>
        <Route path="/reviews" element={<ReviewsComp />} />
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

import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import MyOrder from "./MyOrder";
import CancelOrderUser from "./CancelOrderUser";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  useEffect(() => {
    if (user) {
      const url = `https://jack-hammer-corporation-server.herokuapp.com/orders?email=${user.email}`;
      axios
        .get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((data) => {
          setOrders(data.data);
        })
        .catch((err) => {
          if (err.response.status === 401 || err.response.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
        });
    }
  }, [user, navigate]);
  const cancelOrder = (id) => {
    fetch(
      `https://jack-hammer-corporation-server.herokuapp.com/cancel/order/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully cancel the order");
        }
      });
  };
  return (
    <div className="fadeIn">
      <h2 className="text-lg text-primary font-bold text-left ml-3">
        My Orders : {orders.length}
      </h2>
      <div className="overflow-x-auto mx-3">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Tool</th>
              <th>
                Quantity <small>(Pcs)</small>
              </th>
              <th>
                Total Amount <small>(USD)</small>
              </th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <MyOrder
                index={index}
                key={order._id}
                order={order}
                setOrder={setOrder}
              ></MyOrder>
            ))}
          </tbody>
        </table>
        <CancelOrderUser
          cancelOrder={cancelOrder}
          order={order}
        ></CancelOrderUser>
      </div>
    </div>
  );
};

export default MyOrders;

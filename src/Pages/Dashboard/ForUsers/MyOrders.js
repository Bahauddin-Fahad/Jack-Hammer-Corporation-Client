import React, { useEffect, useState } from "react";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signOut } from "firebase/auth";
const MyOrders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

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
          // console.log(data);
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
  console.log(orders);
  return (
    <div>
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
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.productName}</td>
                <td>{order.quantity} Pieces</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.totalPrice && !order.paid && (
                    <>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-success text-white ">
                          Pay Now
                        </button>
                      </Link>
                      <Link to="">
                        <button className="ml-3 btn btn-xs btn-error text-white ">
                          Cancel Order
                        </button>
                      </Link>
                    </>
                  )}
                  {order.totalPrice && order.paid && (
                    <div>
                      <div className="text-center text-white w-1/3 font-semibold bg-emerald-200 rounded-md mx-auto">
                        PAID
                      </div>
                      <p className="font-semibold">
                        Transaction Id:{" "}
                        <span className="text-success ">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

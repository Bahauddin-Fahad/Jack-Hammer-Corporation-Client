import React, { useState } from "react";
import useReactQuery from "../../../Hooks/useReactQuery";
import { toast } from "react-toastify";
import ManageAllOrder from "./ManageAllOrder";
import "react-toastify/dist/ReactToastify.css";
import CancelOrderAdmin from "./CancelOrderAdmin";
import axios from "axios";

const ManageAllOrders = () => {
  const [order, setOrder] = useState(null);
  const url = "http://localhost:5000/get/orders";
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };

  const { data: orders, refetch } = useReactQuery(url, header);
  const handelShift = (id) => {
    axios
      .patch(`http://localhost:5000/order/shift/${id}`, {}, header)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount > 0) {
          toast.success("Product Successfully Shifted", { theme: "colored" });
          refetch();
        }
      });
  };

  const cancelOrder = (id) => {
    fetch(`http://localhost:5000/order/cancel/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Successfully cancel the order");
          refetch();
        }
      });
  };
  return (
    <>
      <h2 className="text-left ml-3 text-lg text-primary font-bold">
        Manage All Orders {orders?.length}
      </h2>
      <div className="overflow-x-auto mx-3">
        <table className="table w-full">
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
              <th>Action</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <ManageAllOrder
                index={index}
                key={order._id}
                order={order}
                setOrder={setOrder}
                handelShift={handelShift}
              ></ManageAllOrder>
            ))}
          </tbody>
        </table>
        <CancelOrderAdmin
          cancelOrder={cancelOrder}
          order={order}
        ></CancelOrderAdmin>
      </div>
    </>
  );
};

export default ManageAllOrders;

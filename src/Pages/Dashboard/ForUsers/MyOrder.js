import React from "react";
import { Link } from "react-router-dom";

const MyOrder = ({ order, index, setOrder }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{order?.name}</td>
      <td>{order?.toolName}</td>
      <td>{order?.quantity} Pieces</td>
      <td>${order?.totalPrice}</td>
      <td>
        {!order?.paid && <p className="font-semibold text-error">Not Paid</p>}
        {order?.status && !order?.shift && "Pending"}
        {order?.shift && "Shifted"}
      </td>
      <td>
        {order?.totalPrice && !order?.paid && (
          <>
            <Link to={`/dashboard/payment/${order?._id}`}>
              <button className="btn btn-xs btn-success text-white ">
                Pay Now
              </button>
            </Link>
            <label
              htmlFor="cancel-order-user-modal"
              className="ml-3 btn-xs btn-error modal-button btn text-white"
              onClick={() => setOrder(order)}
              disabled={order.paid || order.shift}
            >
              Cancel Order
            </label>
          </>
        )}
        {order.totalPrice && order.paid && (
          <div>
            <div className="text-center text-white w-1/3 font-semibold bg-accent rounded-md mx-auto">
              PAID
            </div>
            <p className="font-semibold">
              Transaction:{" "}
              <span className="text-success ">{order.transactionId}</span>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default MyOrder;
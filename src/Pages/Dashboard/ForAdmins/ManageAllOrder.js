import React from "react";

const ManageAllOrder = ({ order, index, handelShift, setOrder }) => {
  const {
    _id,
    name,
    toolName,
    quantity,
    status,
    transactionId,
    totalPrice,
    shift,
    paid,
  } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{toolName.slice(0, 26)}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td>
        {" "}
        {!status && <p className="font-bold text-error">Not Paid</p>}
        {status && !shift && (
          <p className="font-bold text-secondary">Pending</p>
        )}
        {shift && <p className="font-bold text-success">Shifted</p>}
      </td>

      <td>
        <button
          className="btn btn-xs btn-success mr-2"
          disabled={!paid || shift}
          onClick={() => handelShift(_id)}
        >
          Shift
        </button>
        <label
          htmlFor="cancel-order-admin-modal"
          className=" btn-xs btn-error modal-button btn "
          onClick={() => setOrder(order)}
          disabled={paid || shift}
        >
          Cancel
        </label>
      </td>
      <td>
        <p className="text-success font-semibold">
          {transactionId ? transactionId : ""}
        </p>
      </td>
    </tr>
  );
};

export default ManageAllOrder;

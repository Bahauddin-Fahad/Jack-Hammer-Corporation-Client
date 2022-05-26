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
  console.log(paid, status, shift);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{toolName.slice(0, 26)}</td>
      <td>{quantity}</td>
      <td>{totalPrice}</td>
      <td>
        {" "}
        {!status && "Not Paid"}
        {shift && "Shifted"}
        {status && !shift && "Pending"}
      </td>
      <td>{transactionId ? transactionId : ""}</td>
      <td>
        <button
          className="btn btn-xs btn-success mr-2"
          disabled={!paid || shift}
          onClick={() => handelShift(_id)}
        >
          Shift
        </button>
        <label
          htmlFor="my-modal"
          className=" btn-xs btn-error modal-button btn "
          onClick={() => setOrder(order)}
          disabled={paid || shift}
        >
          Cancel
        </label>
      </td>
    </tr>
  );
};

export default ManageAllOrder;

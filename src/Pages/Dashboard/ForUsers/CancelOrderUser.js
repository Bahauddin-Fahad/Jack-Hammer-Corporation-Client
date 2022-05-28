import React from "react";

const CancelOrderUser = ({ cancelOrder, order }) => {
  return (
    <>
      <input
        type="checkbox"
        id="cancel-order-user-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="cancel-order-user-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Are you sure you want to cancel the order?
          </h3>

          <div className="text-center">
            <div className="modal-action">
              <label
                htmlFor="cancel-order-user-modal"
                className="btn btn-sm btn-outline btn-error"
                onClick={() => cancelOrder(order._id)}
              >
                Confirm
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelOrderUser;

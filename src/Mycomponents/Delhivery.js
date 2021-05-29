import React from "react";

export const Delhivery = ({ order, onDelete }) => {
  return (
    <div className="container card cardstyle">
      <div className="card-body">
        <h2 className="card-header">{order.title}</h2>
        <ul>
          <h4>{order.desc}</h4>
          <label>
            <span>&nbsp;&nbsp;To: {order.to}</span>
          </label>
          <label>&nbsp;&nbsp;From: {order.From}</label>
        </ul>

        <button
          type="button"
          className=" col-md-4 btn btn-success"
          onClick={() => {
            onDelete(order);
          }}
        >
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

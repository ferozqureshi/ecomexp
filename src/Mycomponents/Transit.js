import React from "react";
import { Delhivery } from "./Delhivery";

export const Transit = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">Order Details</h3>
      {props.orders.map((order) => {
        return (
          <Delhivery order={order} key={order.sno} onDelete={props.onDelete} />
        );
      })}
    </div>
  );
};

import React, { useState } from "react";

export const AddOrders = ({ addOrders }) => {
  const [orderName, setOrderName] = useState("");
  const [orderDescription, setorderDescription] = useState("");
  const [To, setTo] = useState("");
  const [From, setFrom] = useState("");
  const [ToAddress, setToAddress] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!orderDescription || !orderName || !To || !From || !ToAddress) {
      alert("Dekhe Bhai!");
    }
    addOrders(orderName, orderDescription, To, From, ToAddress);
    setOrderName("");
    setorderDescription("");
    setToAddress("");
    setTo("");
    setFrom("");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Add Orders</h2>
        <form onSubmit={submit}>
          <div>
            <label className="col-md-4 control-label">Order Name</label>
            <input
              type="text"
              name="fullName"
              value={orderName}
              onChange={(e) => setOrderName(e.target.value)}
              noValidate
            />
          </div>
          <div>
            <label className="col-md-4 control-label">Description</label>
            <input
              type="text"
              name="fullName"
              value={orderDescription}
              onChange={(e) => setorderDescription(e.target.value)}
              placeholder="Describe your order"
            />
          </div>
          <div>
            <label className="col-md-4 control-label">To</label>
            <input
              type="text"
              value={To}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To whom you want to send dude"
            />
          </div>
          <div>
            <label className="col-md-4 control-label">From</label>
            <input
              type="text"
              value={From}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
            />
          </div>
          <div>
            <label>To Address</label>
            <input
              type="text"
              value={ToAddress}
              onChange={(e) => setToAddress(e.target.value)}
              placeholder="To Address(Pathaa)"
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

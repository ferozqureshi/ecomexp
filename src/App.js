import "./App.css";
import Header from "./Mycomponents/Header";
import { Footer } from "./Mycomponents/Footer";
import { Transit } from "./Mycomponents/Transit";
import { useState } from "react";
import { AddOrders } from "./Mycomponents/AddOrders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Welcome } from "./Mycomponents/Welcome";
function App() {
  let initialOrder;
  if (localStorage.getItem("orders") == null) {
    initialOrder = [];
  } else {
    initialOrder = JSON.parse(localStorage.getItem("orders"));
  }
  const onDelete = (order) => {
    setpackages(
      packages.filter((e) => {
        return e !== order;
      })
    );
    localStorage.setItem("orders", JSON.stringify(packages));
  };
  const addOrders = (orderName, orderDescription, To, From, ToAddress) => {
    let sno;
    if (packages.length === 0) {
      sno = 1;
    } else {
      sno = packages[packages.length - 1] + 1;
    }
    const order = {
      sno: sno,
      title: orderName,
      desc: orderDescription,
      to: To,
      From: From,
      ToAddress: ToAddress,
    };
    setpackages([...packages, order]);
    localStorage.setItem("orders", JSON.stringify(order));
  };
  const [packages, setpackages] = useState([initialOrder]);
  return (
    <>
      <Router>
        <Header title="Feroz, E-com" href="/Welcome" searchbar={false} />
        <div className="container ">
          <Switch>
            <Route
              exact
              path="/Orders"
              render={() => {
                return (
                  <>
                    <AddOrders addOrders={addOrders} />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/Welcome"
              render={() => {
                return (
                  <>
                    <Welcome />
                  </>
                );
              }}
            ></Route>
            <Route
              exact
              path="/Transit"
              render={() => {
                return (
                  <>
                    <Transit orders={packages} onDelete={onDelete} />
                  </>
                );
              }}
            ></Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;

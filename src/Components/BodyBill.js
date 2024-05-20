import React from "react";
import OrderCards from "./OrderCards";
import OrderBill from "./OrderBill";

function BodyBill() {
  return (
    <div className="BodyBill">
      <OrderCards />
      <OrderBill />
    </div>
  );
}

export default BodyBill;

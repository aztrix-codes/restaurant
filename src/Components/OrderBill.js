import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { clearOrder } from "./Features/Store";


function OrderBill() {
  const theme = useContext(ThemeContext);

  const orderedItem = useSelector((state) => state.Orders.filter(order => order.orderedCount > 0));

  const dispatch = useDispatch()

  const totalBill = useMemo(() => {
    let total = 0;
    for (let index = 0; index < orderedItem.length; index++) {
      total += orderedItem[index].cost * orderedItem[index].orderedCount;
    }
    return total;
  }, [orderedItem]);

  const tax = useMemo(() => totalBill * 0.1, [totalBill]);
  const grandTotal = useMemo(() => totalBill + tax, [totalBill, tax]);

  return (
    <div
      className="OrderBill"
      style={{
        background:
          theme === "dark" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.7)",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <div className="orderbill-cost">
        <p>Sub Total</p>
        <h3>${totalBill.toFixed(2)}</h3>
      </div>
      <div className="orderbill-cost-tax">
        <p>Tax (10%)</p>
        <h3>${tax.toFixed(2)}</h3>
      </div>
      <div className="bill-divider"></div>
      <div className="orderbill-cost-total">
        <p style={{ color: theme === "dark" ? "white" : "black" }}>Total</p>
        <h3>${grandTotal.toFixed(2)}</h3>
      </div>
      <div className="bill-generate-btn">
        <div className="ripple-btn" onClick={()=>dispatch(clearOrder())}><p>Print Bill</p></div>
      </div>
    </div>
  );
}

export default OrderBill;

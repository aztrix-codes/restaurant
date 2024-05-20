import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "./Features/Store";

function OrderCards() {

  const orderedItem = useSelector((state) =>
    state.Orders.filter((order) => order.orderedCount > 0)
  );

  const dispatch = useDispatch()

  const theme = useContext(ThemeContext);
  return (
    <div className="OrderCards">
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>Order</h1>
      <div className="scrolly order-cards">
        {orderedItem.map((item) => (
          <div
            key={item.id}
            className="order-card"
            style={{
              background:
                theme === "dark" ? "rgba(0,0,0,.7)" : "rgba(255,255,255,.7)",
              color: theme === "dark" ? "white" : "black",
            }}
            onClick={() => dispatch(decrement(item.id))}
          >
            <div className="order-card-img">
              <img src={item.img} alt="err" />
            </div>
            <div className="order-name">
              {item.name.length > 30
                ? item.name.slice(0, 30) + "..."
                : item.name}{" "}
              ({item.orderedCount}x)
            </div>
            <div className="order-cost">
              ${(item.cost * item.orderedCount).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderCards;

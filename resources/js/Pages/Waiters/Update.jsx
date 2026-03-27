import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function UserIndex({ orders }) {
    const [orderList, setOrderList] = useState(orders);

  const change = (orderId) => {
    const updatedOrders = orderList.map((order) => {
      if (order.id === orderId) {
        const newState = order.cookState === "Принят" ? "Оплачен" : "Принят";
        return { ...order, cookState: newState };
      }
      return order;
    });
    setOrderList(updatedOrders);
  };
  return (
    <div>
        <header style={{backgroundColor: "#d1d1d1ff", height: "40px", fontFamily: "sans-serif", display: "flex", justifyContent: "space-around"}}>
            <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/">На главную</Link>
            </div>
            <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
            <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/createOrd">Создать заказ</Link>
            </div>
            <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
            <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/waitOrdUpdate">Изменить статус заказа</Link>
            </div>
        </header>

      <div id="main" style={{ padding: "20px" }}>
        <ul style={{ padding: 0 }}>
          {orderList.map(order => (
            <div key={order.id} style={{ display: 'flex', marginBottom: "20px", alignItems: "center" }}>
              <li style={{ listStyleType: "none", marginRight: "15px" }}>{order.id} заказ: {order.payState}</li>
              <button onClick={() => change(order.id)}>Изменить статус</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
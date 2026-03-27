import React from "react";
import { Link } from "@inertiajs/react";

export default function UserIndex({orders, dishes, supports}){

    return(
            <div>
                <header style={{backgroundColor: "#d1d1d1ff", height: "40px", fontFamily: "sans-serif", display: "flex", justifyContent: "space-around"}}>
                    <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/">На главную</Link>
                    </div>
                    <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
                    <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/showChef">Заказы</Link>
                    </div>
                    <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
                    <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/ordUpdate">Изменить статус заказа</Link>
                    </div>
                </header>
                <div id="main">
                    <ul>
                    {orders.map(order => (
                        <li style={{listStyleType: "none"}} key={order.id}>{order.id} заказ
                            <ul>
                                {supports.map(sup => (
                                    dishes.map(dish => (
                                        <div>
                                            {sup.order_id == order.id && sup.dish_id == dish.id ? 
                                                <li key={sup.id}>{dish.name}</li>
                                                : 
                                                null
                                            }
                                        </div>
                                    ))
                                ))}
                            </ul>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        )
}
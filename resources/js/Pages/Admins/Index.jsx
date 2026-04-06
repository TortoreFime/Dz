import React from "react";
import { Link } from "@inertiajs/react";

export default function UserIndex({employees, orders, supports}){

    return(
        <div>
            <header style={{backgroundColor: "#d1d1d1ff", height: "40px", fontFamily: "sans-serif", display: "flex", justifyContent: "space-around"}}>
                <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/">На главную</Link>
                </div>
                <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
                <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/">Добавить работник</Link>
                </div>
                <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
                <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/adminShifts">Назначить на смену</Link>
                </div>
                <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
                <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/showAdmin">Заказы</Link>
                </div>
            </header>
        </div>
    )
}

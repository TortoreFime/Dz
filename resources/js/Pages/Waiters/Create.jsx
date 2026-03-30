import React from "react";
import {Link, useForm} from "@inertiajs/react";

export default function UserIndex({orders, dishes, supports}){

    const {data, setData, post} = useForm({
        cookState: "Готовиться", 
        payState: ""
    });

    const {supData, setSupData, supPost} = useForm({
        dish_id: "",
        order_id: ""
    })

    const [selectedValue, setSelectedValue] = useState('');
    const handleSubmit = () => {
        post('/createOrd');
    }
    const supHandleSubmit = () => {
        supPost('/createOrd');
    }
    const handleChange = (event) => {
        setSelectedValue(event.target.value); 
    };


    return(
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
                <h1>Создать заказ</h1>
                <div>
                    <label htmlFor="payState">Введите статус оплаты заказа</label>
                    <select name="payState" id="payState" value={data.payState} onChange={(e) => {handleChange; setData("payState", e.target.value)}}>
                        <option value="Готовится">Готовится</option>
                        <option value="Приготовлен">Приготовлен</option>
                    </select>
                    <button onClick={handleSubmit}>Создать заказ</button>
                </div>
                <div>
                    <h1>Заполнение заказа</h1>
                    <label htmlFor="">Номер заказа</label>
                    <select onChange={(e) => {handleChange; setSupData("order_id", e.target.value)}} style={{display: "flex", flexDirection: "column", width: "150px", margin: "15px"}} name="" id="orderId" value={selectedValue}>
                        {orders.map(order => (
                            <option id={order.id} value={order.id}>{order.id}</option>
                        ))}
                    </select>
                    <label htmlFor="">Добавить блюда в заказ</label>
                    <select onChange={(e) => {handleChange; setSupData("order_id", e.target.value)}} style={{display: "flex", flexDirection: "column", width: "150px", margin: "15px"}} name="" id="dishId" value={selectedValue}>
                        {dishes.map(dish => (
                            <option id={dish.id} value={dish.id}>{dish.name}</option>
                        ))}
                    </select>
                    <button onClick={supHandleSubmit}>Добавить позицию</button>
                </div>
            </div>
        )
}
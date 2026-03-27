import React from "react";
import {Link, useForm} from "@inertiajs/react";

export default function UserIndex({orders, dishes, supports}){

    const {data, setData, post} = useForm({
        cookState: "Готовиться", 
        payState: ""
    });

    const [selectedValue, setSelectedValue] = useState('');
    const handleSubmit = () => {
        post('/users');
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
                </div>
                <div>
                    <h1>Заполнение заказа</h1>
                    <label htmlFor="">Номер заказа</label>
                    <select style={{display: "flex", flexDirection: "column", width: "150px", margin: "15px"}} name="" id="orderId">
                        {orders.map(order => (
                            <option id={order.id} value={order.id}>{order.id}</option>
                        ))}

                    </select>
                    <label htmlFor="">Добавить блюда в заказ</label>
                    <select style={{display: "flex", flexDirection: "column", width: "150px", margin: "15px"}} name="" id="dishId">
                        {dishes.map(dish => (
                            <option id={dish.id} value={dish.id}>{dish.name}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
}
// const {data, setData, post} = useForm({
//         name: "",
//         age: "",
//         mail: "",
//         is_active: true,
//         group_id: "1"
//     });
//     const [selectedValue, setSelectedValue] = useState('');
//     const handleSubmit = () => {
//         post('/users');
//     }
//     const handleChange = (event) => {
//         setSelectedValue(event.target.value); 
//     };
//     return (
//      <div>
//         <div>
//             <div>
//                 <label htmlFor="name">Введите имя</label>
//                 <input value={data.name} onChange={e => setData('name', e.target.value)}/>
//             </div>
//             <div>
//                 <label htmlFor="age">Введите возраст</label>
//                 <input value={data.age} onChange={e => setData('age', e.target.value)}/>
//             </div>
//             <div>
//                 <label htmlFor="mail">Введите почту</label>
//                 <input value={data.mail} onChange={e => setData('mail', e.target.value)}/>
//             </div>
//             <div>
//                 <select name="group_id" id="group_id" value={selectedValue} onChange={handleChange}>
//                     {groups.map(g => (
//                         <option value={g.id}>{g.name}</option>
//                     ))};
//                 </select>
//             </div>
//             <button onClick={handleSubmit}>Добавить пользователя</button>
//         </div>
//      </div>   
//     )
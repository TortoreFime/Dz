import React from "react";
import { Link } from "@inertiajs/react";

export default function UserIndex({employee}){
    const {data, setData, post} = useForm({
            name: employee.name,
            surname: employee.surname,
            login: employee.login,
            password: employee.password,
            work_state: employee.work_state,
            cur_shift: 0,
            is_active: employee.is_active,
            job_id: employee.job_id 
        });

    const handleSubmit = () => {
        post('/admin/{$id}');
    }

    return(
            <div>
                <header style={{backgroundColor: "#d1d1d1ff", height: "40px", fontFamily: "sans-serif", display: "flex", justifyContent: "space-around"}}>
                    <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/">На главную</Link>
                    </div>
                    <div><p style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", margin: "0px"}}>|</p></div>
                    <div style={{width: "fit-content", height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/">Добавить работника</Link>
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
                <div>
                    <p>{employee.name} {employee.surname}</p>
                    <div>
                        <button value={0} onClick={(e) => setData('cur_shift', e.target.value)}>Назначить на текущую смену</button>
                        <button value={1} onClick={(e) => setData('cur_shift', e.target.value)}>Снять со смены</button>
                    </div>
                    <button onClick={handleSubmit}>Принять изменения</button>
                </div>
            </div>
    )
}
import React from "react";
import {Link, useForm} from "@inertiajs/react";

export default function UserIndex({employees, jobs}){

    const {data, setData, post} = useForm({
        name: "",
        surname: "",
        login: "",
        password: "",
        work_state: "Работает",
        cur_shift: 0,
        is_active: 0,
        job_id: 0 
    });

    const [selectedValue, setSelectedValue] = useState('');

    const handleSubmit = () => {
        post('/createUser');
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
                                <Link style={{outline: "none", color: "black", textDecoration: "none"}} href="/createUser">Добавить работник</Link>
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
                <h1>Добавление работника</h1>
                <div style={{width: "200px"}}>
                    <label htmlFor="name">Введите имя</label>
                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                </div>
                <label htmlFor="surname">Введите фамилию</label>
                <input type="text" value={data.surname} onChange={(e) => setData('surname', e.target.value)}/>

                <label htmlFor="login">Введите логин</label>
                <input type="text" value={data.login} onChange={(e) => setData('login', e.target.value)}/>

                <label htmlFor="password">Введите пароль</label>
                <input type="text" value={data.password} onChange={(e) => setData('password', e.target.value)}/>

                <select name="job_id" id="job_id" value={selectedValue} onChange={(e) => {handleChange; setData('job_id', e.target.value)}}>
                    {jobs.map(j => (
                        <option value={j.id}>{j.name}</option>
                    ))}
                </select>
                <button onClick={handleSubmit}>Добавить</button>
            </div>
        </div>
    );
};
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
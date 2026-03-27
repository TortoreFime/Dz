import React from "react";
import { useState } from "react";

export default function UserIndex({employees}){
    const [employee, setEmployee] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [log, setlog] = useState("");
    const [pas, setPas] = useState("");
    const [jobId, setJobId] = useState(0);

    const getEmployee = function(log, pas){
        employees.forEach(emp => {
            if(emp.login == log && emp.password == pas){
                setEmployee(emp);
                setJobId(emp.job_id);
                getEmployeeState();
            }
        });
    }   
    const getEmployeeState = function(){
        if(employee == null){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    }
    const goToPage = function(){
        if(jobId == 1){
            window.location.href = "/admin";
        }
        else if(jobId == 2){
            window.location.href = "/waiter";
        }
        else if(jobId == 3){
            window.location.href = "/chef";
        }
        else{
            console.log("Неправильный id профессии");
        }
    }
    return(
        <div style={{width: '100%', height: '935px', justifyContent: "center", alignItems: "center", display: "flex"}}>
            <div style={{width: '325px', height: '450px', backgroundColor: "#eeeeeeff", justifyContent: "space-between" , alignItems: "center", display: "flex", flexDirection: "column", fontFamily: "sans-serif"}}>
                <div style={{backgroundColor: "#d1d1d1ff", width: "100%", textAlign: "center", height: "90px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h1>Вход в систему</h1>
                </div>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start", width: "100%",}}>
                    <input id="log" style={{margin: "0px 25px 0px 40px"}} type="text" onChange={(e) => setlog(e.target.value)} placeholder="Введите логин"/>
                    <input id="pas" style={{margin: "20px 25px 0px 40px"}} type="text" onChange={(e) => setPas(e.target.value)} placeholder="Введите пароль"/>
                </div>
                <div style={{backgroundColor: "#d1d1d1ff", width: "100%", textAlign: "center", height: "80px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    {!isVisible && <p style={{fontSize: "16px", margin: "0px 0px 10px 0px"}}>Не удалось войти</p>}
                    <button style={{width: "150px", height: "30px", fontSize: "20px", fontFamily: "sans-serif"}} onClick={() => {getEmployee(log, pas); goToPage()}}>Войти</button>
                </div>
            </div>
        </div>
    )
}
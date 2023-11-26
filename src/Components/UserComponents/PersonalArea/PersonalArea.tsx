import React from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import PersonalAreaUserInfo from "./PersonalAreaUserInfo";
import Header from "../../../UI/Header/Header";
import {IEmployeeType} from "../../../Types/EmployeeType";
import Kanban from "../Kanban/Kanban";

const PersonalArea: React.FC = () => {
    const employee: IEmployeeType = {
        fio: "Тестовый Тест Тестович",
        email: "ttestovii@brusnika.ru",
        phone: "8-963-094-68-34",
        job: "Специалист1",
        department: "Аналитический отдел",
        supervisor: "Пробковый Пробка Пробкович",
    }

    return (
        <main className="personalArea">
            <Header/>
            <div className="personalArea__container">
                <PersonalAreaUserInfo employee={employee}/>
                <Kanban/>
            </div>
        </main>
    );
};

export default PersonalArea;

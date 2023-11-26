import React from 'react';
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import UserImage from "../../../UI/UserImage";
import {IEmployeeType} from "../../../Types/EmployeeType";

interface PersonalAreaUserInfoProps {
    employee: IEmployeeType,
}

const PersonalAreaUserInfo: React.FC<PersonalAreaUserInfoProps> = ({employee}: PersonalAreaUserInfoProps) => {
    return (
        <div className="personalArea__userInfo">
            <h1 className="userInfo__title">
                Личный кабинет сотрудника
            </h1>
            <div className="userInfo__block">
                <UserImage styles="userInfo__image"/>
                <div className="userInfo__block-lists">
                    <ul className="userInfo__block-list">
                        <li className="userInfo__list-item">ФИО</li>
                        <li className="userInfo__list-item">E-mail</li>
                        <li className="userInfo__list-item">Телефон</li>
                        <li className="userInfo__list-item">Должность</li>
                        <li className="userInfo__list-item">Отдел</li>
                        <li className="userInfo__list-item">Руководитель</li>
                    </ul>
                    <ul className="userInfo__block-list">
                        <li className="userInfo__list-item">
                            {employee.fio}
                        </li>
                        <li className="userInfo__list-item">
                            <a href={`mailto:${employee.email}`}>
                                {employee.email}
                            </a>
                        </li>
                        <li className="userInfo__list-item">
                            <a href={`tel:${employee.phone}`}>
                                {employee.phone}
                            </a>
                        </li>
                        <li className="userInfo__list-item">
                            {employee.job}
                        </li>
                        <li className="userInfo__list-item">
                            {employee.department}
                        </li>
                        <li className="userInfo__list-item">
                            {employee.supervisor}
                        </li>
                    </ul>
                </div>
                <div className="userInfo__edit">
                    <ButtonMain
                        btnStyle="userInfo__edit-btn"
                        btnText="Редактировать"
                        handleOnClick={() => {
                        }}/>
                </div>
            </div>
        </div>
    );
};

export default PersonalAreaUserInfo;

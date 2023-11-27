import React from 'react';
import ButtonMain from "../../../../UI/MyButton/ButtonMain";
import UserImage from "../../../../UI/UserImage/UserImage";
import employeeActionsStore from "../../../../Store/EmployeeActionsStore";
import {observer} from "mobx-react-lite";

const UserInfo: React.FC = observer(() => {
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
                            {employeeActionsStore.currentEmployeeFIO}
                        </li>
                        <li className="userInfo__list-item">
                            <a href={`mailto:${employeeActionsStore.currentEmployeeEmail}`}>
                                {employeeActionsStore.currentEmployeeEmail}
                            </a>
                        </li>
                        <li className="userInfo__list-item">
                            <a href={`tel:${employeeActionsStore.currentEmployeePhone}`}>
                                {employeeActionsStore.currentEmployeePhone}
                            </a>
                        </li>
                        <li className="userInfo__list-item">
                            {employeeActionsStore.currentEmployeeJob}
                        </li>
                        <li className="userInfo__list-item">
                            {employeeActionsStore.currentEmployeeDepartment}
                        </li>
                        <li className="userInfo__list-item">
                            {employeeActionsStore.currentEmployeeSupervisor}
                        </li>
                    </ul>
                </div>
                <div className="userInfo__edit">
                    <ButtonMain
                        btnStyle="userInfo__edit-btn"
                        btnText="Редактировать"
                        handleOnClick={() => employeeActionsStore.updateIsEditingClicked()}/>
                </div>
            </div>
        </div>
    );
});

export default UserInfo;

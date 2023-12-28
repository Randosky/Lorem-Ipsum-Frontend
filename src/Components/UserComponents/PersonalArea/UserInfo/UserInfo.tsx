import React from 'react';
import ButtonMain from "../../../../UI/MyButton/ButtonMain";
import UserImage from "../../../../UI/UserImage/UserImage";
import {observer} from "mobx-react-lite";
import {IEmployeeType} from "../../../../Types/Employee/EmployeeType";

interface UserInfoProps {
    handleOnEdit: () => void,
    employeeInfo: IEmployeeType,
}

const UserInfo: React.FC<UserInfoProps> = (props: UserInfoProps) => {

    const {
        handleOnEdit,
        employeeInfo,
    } = props

    return (
        <div className="personalArea__userInfo">
            <h1 className="userInfo__title">
                Личный кабинет сотрудника
            </h1>
            <div className="userInfo__block">
                <UserImage styles="userInfo__image" userImageUrl={employeeInfo.s3_avatar_file || ""}/>
                <div className="userInfo__block-rows">
                    <div className="userInfo__block-row">
                        <p className="userInfo__list-item">
                            ФИО
                        </p>
                        <p className="userInfo__list-item">
                            {`${employeeInfo.last_name} ${employeeInfo.first_name} ${employeeInfo.patronymic}`}
                        </p>
                    </div>
                    <div className="userInfo__block-row">
                        <p className="userInfo__list-item">
                            E-mail
                        </p>
                        <a href={`mailto:${employeeInfo.email}`} className="userInfo__list-item">
                            {employeeInfo.email}
                        </a>
                    </div>
                    <div className="userInfo__block-row">
                        <p className="userInfo__list-item">
                            Телефон
                        </p>
                        <a href={`tel:${employeeInfo?.phone_number}`} className="userInfo__list-item">
                            {employeeInfo?.phone_number || "нет данных"}
                        </a>
                    </div>
                    <div className="userInfo__block-row">
                        <p className="userInfo__list-item">
                            Должность
                        </p>
                        <p className="userInfo__list-item">
                            {employeeInfo.position?.position_name || "нет данных"}
                        </p>
                    </div>
                    <div className="userInfo__block-row">
                        <p className="userInfo__list-item">
                            Отдел
                        </p>
                        <p className="userInfo__list-item">
                            {employeeInfo.department?.department_name || "нет данных"}
                        </p>
                    </div>
                    <div className="userInfo__block-row">
                        <p className="userInfo__list-item">
                            Руководитель
                        </p>
                        <p className="userInfo__list-item">
                            {
                                employeeInfo.employee_head
                                    ?
                                    `${employeeInfo.employee_head?.last_name} 
                            ${employeeInfo.employee_head?.first_name} 
                            ${employeeInfo.employee_head?.patronymic}`
                                    : "нет данных"
                            }
                        </p>
                    </div>
                </div>
                <div className="userInfo__edit">
                    <ButtonMain
                        btnStyle="userInfo__edit-btn"
                        btnText="Редактировать"
                        handleOnClick={handleOnEdit}/>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;

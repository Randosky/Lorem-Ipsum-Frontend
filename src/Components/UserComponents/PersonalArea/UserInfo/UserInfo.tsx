import React from 'react';
import ButtonMain from "../../../../UI/MyButton/ButtonMain";
import UserImage from "../../../../UI/UserImage/UserImage";
import {observer} from "mobx-react-lite";
import {IEmployeeType} from "../../../../Types/Employee/EmployeeType";

interface UserInfoProps extends IEmployeeType {
    handleOnEdit: () => void,
}

const UserInfo: React.FC<UserInfoProps> = observer((props: UserInfoProps) => {

    const {handleOnEdit, department, email, image, job, fio, phone, supervisor} = props

    return (
        <div className="personalArea__userInfo">
            <h1 className="userInfo__title">
                Личный кабинет сотрудника
            </h1>
            <div className="userInfo__block">
                <UserImage styles="userInfo__image" userImageUrl={image}/>
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
                            {fio}
                        </li>
                        <li className="userInfo__list-item">
                            <a href={`mailto:${email}`}>
                                {email}
                            </a>
                        </li>
                        <li className="userInfo__list-item">
                            <a href={`tel:${phone}`}>
                                {phone}
                            </a>
                        </li>
                        <li className="userInfo__list-item">
                            {job}
                        </li>
                        <li className="userInfo__list-item">
                            {department}
                        </li>
                        <li className="userInfo__list-item">
                            {supervisor}
                        </li>
                    </ul>
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
});

export default UserInfo;

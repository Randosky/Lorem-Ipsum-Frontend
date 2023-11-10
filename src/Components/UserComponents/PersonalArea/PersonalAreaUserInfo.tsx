import React from 'react';
import ButtonMain from "../../../UI/MyButton/ButtonMain";

const PersonalAreaUserInfo: React.FC = () => {
    return (
        <div className="personalArea__userInfo">
            <div className="userInfo__img">
                <label>
                    <input type="file" accept="image/png, image/jpeg"/>
                    <div></div>
                </label>
            </div>
            <div className="userInfo__lists">
                <h1>Личный кабинет сотрудника</h1>
                <div className="userInfo__lists-block">
                    <ul className="userInfo__lists-list">
                        <li className="userInfo__lists-item">ФИО</li>
                        <li className="userInfo__lists-item">ОТДЕЛ</li>
                        <li className="userInfo__lists-item">EMAIL</li>
                        <li className="userInfo__lists-item">ТЕЛЕФОН</li>
                    </ul>
                    <ul className="userInfo__lists-list">
                        <li className="userInfo__lists-item">ТЕСТОВЫЙ ТЕСТ ТЕСТОВИЧ</li>
                        <li className="userInfo__lists-item">ЗЕМЕЛЬНЫЙ БАНК</li>
                        <li className="userInfo__lists-item">Test@mail.ru</li>
                        <li className="userInfo__lists-item">8 999 999 99 99</li>
                    </ul>
                </div>
            </div>
            <div className="userInfo__edit">
                <ButtonMain
                    btnStyle="userInfo__edit-btn"
                    btnText="Редактировать информацию"
                    handleOnClick={() => {
                    }}/>
            </div>
        </div>
    );
};

export default PersonalAreaUserInfo;

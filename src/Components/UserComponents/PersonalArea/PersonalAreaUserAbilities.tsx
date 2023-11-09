import React from 'react';
import ButtonMain from "../../../UI/MyButton/ButtonMain";

const PersonalAreaUserAbilities: React.FC = () => {
    return (
        <div className="personalArea__userAbilities">
            <ul className="userAbilities__list">
                <li className="userAbilities__list-item">
                    <ButtonMain
                        btnText="Добавить задачу"
                        btnStyle="userAbilities__list-btn"
                        handleOnClick={() => {
                        }}/>
                </li>
                <li className="userAbilities__list-item">
                    <ButtonMain
                        btnText="Добавить новый участок"
                        btnStyle="userAbilities__list-btn"
                        handleOnClick={() => {
                        }}/>
                </li>
                <li className="userAbilities__list-item">
                    <ButtonMain
                        btnText="Добавить собственника"
                        btnStyle="userAbilities__list-btn"
                        handleOnClick={() => {
                        }}/>
                </li>
            </ul>
            <ul className="userAbilities__list">
                <li className="userAbilities__list-item">
                    <ButtonMain
                        btnText="Перейти к списку задач"
                        btnStyle="userAbilities__list-btn"
                        handleOnClick={() => {
                        }}/>
                </li>
                <li className="userAbilities__list-item">
                    <ButtonMain
                        btnText="Перейти к списку участков"
                        btnStyle="userAbilities__list-btn"
                        handleOnClick={() => {
                        }}/>
                </li>
                <li className="userAbilities__list-item">
                    <ButtonMain
                        btnText="Перейти к списку собственников"
                        btnStyle="userAbilities__list-btn"
                        handleOnClick={() => {
                        }}/>
                </li>
            </ul>
        </div>
    );
};

export default PersonalAreaUserAbilities;

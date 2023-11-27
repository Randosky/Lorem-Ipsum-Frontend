import React from 'react';
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import UserImage from "../../../UI/UserImage/UserImage";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import "../../../Styles/EditingPage/EditingPage.scss"
import {observer} from "mobx-react-lite";

const EditingPage: React.FC = observer(() => {

    return (
        <div className="personalArea__editing">
            <h1 className="editing__title">
                Редактирование личной информации
            </h1>
            <div className="editing__lists">
                <UserImage styles="editing__image" isFileDraggable={true}
                           handleOnChange={(e) =>
                               employeeActionsStore.updateCurrentEmployeeImage(e.target.files)}/>
                <ul className="editing__list editing__list-first">
                    <li className="editing__list-item">
                        <MyInputWithPrefix inputStyle="editing__item-input"
                                           prefixStyle="editing__item-prefix" type="text" prefixText="ФИО"
                                           value={employeeActionsStore.currentEmployeeFIO}
                                           handleOnChange={(e) =>
                                               employeeActionsStore.updateCurrentEmployeeFIO(e.target.value)}/>
                    </li>
                    <li className="editing__list-item">
                        <MyInputWithPrefix inputStyle="editing__item-input"
                                           pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                           prefixStyle="editing__item-prefix" type="email" prefixText="E-mail"
                                           value={employeeActionsStore.currentEmployeeEmail}
                                           handleOnChange={(e) =>
                                               employeeActionsStore.updateCurrentEmployeeEmail(e.target.value)}/>
                    </li>
                    <li className="editing__list-item">
                        <MyInputWithPrefix inputStyle="editing__item-input"
                                           prefixStyle="editing__item-prefix" type="tel" prefixText="Телефон"
                                           value={employeeActionsStore.currentEmployeePhone}
                                           handleOnChange={(e) =>
                                               employeeActionsStore.updateCurrentEmployeePhone(e.target.value)}/>
                    </li>
                </ul>
                <ul className="editing__list">
                    <li className="editing__list-item">
                        <MyInputWithPrefix inputStyle="editing__item-input"
                                           prefixStyle="editing__item-prefix" type="text" prefixText="Должность"
                                           value={employeeActionsStore.currentEmployeeJob}
                                           handleOnChange={(e) =>
                                               employeeActionsStore.updateCurrentEmployeeJob(e.target.value)}/>
                    </li>
                    <li className="editing__list-item">
                        <MyInputWithPrefix inputStyle="editing__item-input"
                                           prefixStyle="editing__item-prefix" type="text" prefixText="Отдел"
                                           value={employeeActionsStore.currentEmployeeDepartment}
                                           handleOnChange={(e) =>
                                               employeeActionsStore.updateCurrentEmployeeDepartment(e.target.value)}/>
                    </li>
                    <li className="editing__list-item">
                        <MyInputWithPrefix inputStyle="editing__item-input"
                                           prefixStyle="editing__item-prefix" type="text" prefixText="Руководитель"
                                           value={employeeActionsStore.currentEmployeeSupervisor}
                                           handleOnChange={(e) =>
                                               employeeActionsStore.updateCurrentEmployeeSupervisor(e.target.value)}/>
                    </li>
                </ul>
            </div>
            <ButtonMain btnStyle="editing__save" btnText="Сохранить"
                        handleOnClick={() => {
                            employeeActionsStore.saveCurrentEmployeeData()
                            employeeActionsStore.updateIsEditingClicked()
                        }}/>
        </div>
    );
});

export default EditingPage;

import React from 'react';
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import UserImage from "../../../UI/UserImage/UserImage";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import "../../../Styles/EditingPage/EditingPage.scss"
import {observer} from "mobx-react-lite";
import {IEmployeeType} from "../../../Types/Employee/EmployeeType";

interface EditingPageProps extends IEmployeeType {
    handleOnEdit: () => void,
    handleOnEmployeeFIO: (e: string) => void,
    handleOnEmployeeEmail: (e: string) => void,
    handleOnEmployeePhone: (e: string) => void,
    handleOnEmployeeJob: (e: string) => void,
    handleOnEmployeeDepartment: (e: string) => void,
    handleOnEmployeeSupervisor: (e: string) => void,
    handleOnEmployeeImage: (e: File | null) => void,
}

const EditingPage: React.FC<EditingPageProps> = observer((props: EditingPageProps) => {
    const {
        handleOnEdit,
        handleOnEmployeeDepartment,
        handleOnEmployeeSupervisor,
        handleOnEmployeeImage,
        handleOnEmployeeEmail,
        handleOnEmployeeFIO,
        handleOnEmployeeJob,
        handleOnEmployeePhone,
        image,
        phone,
        department,
        fio,
        job,
        email,
        supervisor
    } = props

    return (
        <div className="personalArea__editing">
            <h1 className="editing__title">
                Редактирование личной информации
            </h1>
            <div className="editing__lists">
                <UserImage styles="editing__image" isFileDraggable={true}
                           handleOnChange={(e) => handleOnEmployeeImage(e.target.files ? e.target.files[0] : null)}/>
                <div className="editing__lists-lists">
                    <ul className="editing__list">
                        <li className="editing__list-item">
                            <MyInputWithPrefix inputStyle="editing__item-input"
                                               prefixStyle="editing__item-prefix" type="text" prefixText="ФИО"
                                               value={fio}
                                               handleOnChange={(e) => handleOnEmployeeFIO(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix inputStyle="editing__item-input"
                                               pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                               prefixStyle="editing__item-prefix" type="email" prefixText="E-mail"
                                               value={email}
                                               handleOnChange={(e) => handleOnEmployeeEmail(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix inputStyle="editing__item-input"
                                               prefixStyle="editing__item-prefix" type="tel" prefixText="Телефон"
                                               value={phone}
                                               handleOnChange={(e) => handleOnEmployeePhone(e.target.value)}/>
                        </li>
                    </ul>
                    <ul className="editing__list">
                        <li className="editing__list-item">
                            <MyInputWithPrefix inputStyle="editing__item-input"
                                               prefixStyle="editing__item-prefix" type="text" prefixText="Должность"
                                               value={job}
                                               handleOnChange={(e) => handleOnEmployeeJob(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix inputStyle="editing__item-input"
                                               prefixStyle="editing__item-prefix" type="text" prefixText="Отдел"
                                               value={department}
                                               handleOnChange={(e) => handleOnEmployeeDepartment(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix inputStyle="editing__item-input"
                                               prefixStyle="editing__item-prefix" type="text" prefixText="Руководитель"
                                               value={supervisor}
                                               handleOnChange={(e) => handleOnEmployeeSupervisor(e.target.value)}/>
                        </li>
                    </ul>
                </div>
            </div>
            <ButtonMain btnStyle="editing__save" btnText="Сохранить"
                        handleOnClick={() => employeeActionsStore.saveCurrentEmployeeData()
                            .then(handleOnEdit)}/>
        </div>
    );
});

export default EditingPage;

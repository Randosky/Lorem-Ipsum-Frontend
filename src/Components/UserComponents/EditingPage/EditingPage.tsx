import React, {useCallback, useState} from 'react';
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import UserImage from "../../../UI/UserImage/UserImage";
import ButtonMain from "../../../UI/MyButton/ButtonMain";
import "../../../Styles/EditingPage/EditingPage.scss"
import {observer} from "mobx-react-lite";
import {IEmployeeType} from "../../../Types/Employee/EmployeeType";

interface EditingPageProps {
    handleOnEdit: () => void,
    employeeInfo: IEmployeeType,
}

const EditingPage: React.FC<EditingPageProps> = observer((props: EditingPageProps) => {
    const {
        handleOnEdit,
        employeeInfo,
    } = props

    const [employeeFIO, setEmployeeFIO] = useState(`${employeeInfo.last_name} ${employeeInfo.first_name} ${employeeInfo.patronymic}`)
    const [employeeEmail, setEmployeeEmail] = useState(employeeInfo.email)
    const [employeePhone, setEmployeePhone] = useState(employeeInfo.phone_number || "")
    const [employeeJob, setEmployeeJob] = useState(employeeInfo.position?.position_name || "")
    const [employeeDepartment, setEmployeeDepartment] = useState(employeeInfo.department?.department_name || "")
    const [employeeSupervisor, setEmployeeSupervisor] = useState(employeeInfo.employee_head
        ? `${employeeInfo.employee_head?.last_name} ${employeeInfo.employee_head?.first_name} ${employeeInfo.employee_head?.patronymic}`
        : "")
    const [employeeImage, setEmployeeImage] = useState(employeeInfo.s3_avatar_file || "");

    const handleOnEmployeeFIO = useCallback(
        (e: string) => setEmployeeFIO(e), [],
    );
    const handleOnEmployeeEmail = useCallback(
        (e: string) => setEmployeeEmail(e), [],
    );
    const handleOnEmployeePhone = useCallback(
        (e: string) => setEmployeePhone(e), [],
    );
    const handleOnEmployeeJob = useCallback(
        (e: string) => setEmployeeJob(e), [],
    );
    const handleOnEmployeeDepartment = useCallback(
        (e: string) => setEmployeeDepartment(e), [],
    );
    const handleOnEmployeeSupervisor = useCallback(
        (e: string) => setEmployeeSupervisor(e), [],
    );
    const handleOnEmployeeImage = useCallback(
        (e: string) => setEmployeeImage(e), [],
    );

    return (
        <div className="personalArea__editing">
            <h1 className="editing__title">
                Редактирование личной информации
            </h1>
            <div className="editing__lists">
                <div className="editing__images">
                    <UserImage styles="editing__image" isFileDraggable={true}
                               handleOnChange={(e) => e.target.files
                                   ? employeeActionsStore.setEmployeeProfilePhoto(e.target.files[0])
                                       .then(img => handleOnEmployeeImage(img))
                                   : ""}/>
                    {
                        employeeImage
                            ? <img src={employeeImage} className="editing__images-preview" alt="employeeImage"/>
                            : ""
                    }
                </div>
                <div className="editing__lists-lists">
                    <ul className="editing__list">
                        <li className="editing__list-item">
                            <MyInputWithPrefix type="text" prefixText="ФИО"
                                               value={employeeFIO}
                                               handleOnChange={(e) => handleOnEmployeeFIO(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                               type="email" prefixText="E-mail"
                                               value={employeeEmail}
                                               handleOnChange={(e) => handleOnEmployeeEmail(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix type="tel" prefixText="Телефон"
                                               value={employeePhone}
                                               handleOnChange={(e) => handleOnEmployeePhone(e.target.value)}/>
                        </li>
                    </ul>
                    <ul className="editing__list">
                        <li className="editing__list-item">
                            <MyInputWithPrefix isReadOnly={true} type="text" prefixText="Должность"
                                               value={employeeJob || "Нет данных"}
                                               handleOnChange={(e) => handleOnEmployeeJob(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix isReadOnly={true} type="text" prefixText="Отдел"
                                               value={employeeDepartment || "Нет данных"}
                                               handleOnChange={(e) => handleOnEmployeeDepartment(e.target.value)}/>
                        </li>
                        <li className="editing__list-item">
                            <MyInputWithPrefix isReadOnly={true} type="text" prefixText="Руководитель"
                                               value={employeeSupervisor || "Нет данных"}
                                               handleOnChange={(e) => handleOnEmployeeSupervisor(e.target.value)}/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="editing__buttons">
                <ButtonMain btnStyle="editing__save" btnText="Отменить"
                            handleOnClick={handleOnEdit}/>
                <ButtonMain btnStyle="editing__save" btnText="Сохранить"
                            handleOnClick={() => employeeActionsStore.updateEmployeeProfileInfo(employeeFIO, employeePhone)
                                .then(handleOnEdit)}/>
            </div>
        </div>
    );
});

export default EditingPage;

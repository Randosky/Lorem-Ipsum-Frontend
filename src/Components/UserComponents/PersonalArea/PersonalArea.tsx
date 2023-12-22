import React, {lazy, Suspense, useCallback, useEffect, useState} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import UserInfo from "./UserInfo/UserInfo";
import Header from "../../../UI/Header/Header";
import Kanban from "./Kanban/Kanban";
import Loading from "../../AdditionalComponets/LoadingPage/Loading";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import authStore from "../../../Store/AuthStore";
import {observer} from "mobx-react-lite";

const PersonalArea: React.FC = observer(() => {

    useEffect(() => {
        authStore.refreshSession()
            .then(() => employeeActionsStore.getEmployeeProfileInfo().then())
    }, [])

    const EditingPage = lazy(() => import("../EditingPage/EditingPage"))

    const [isEditClicked, setIsEditClicked] = useState(false);
    const [currentEmployeeFIO, setCurrentEmployeeFIO] = useState("")
    const [currentEmployeeEmail, setCurrentEmployeeEmail] = useState("")
    const [currentEmployeePhone, setCurrentEmployeePhone] = useState("")
    const [currentEmployeeJob, setCurrentEmployeeJob] = useState("")
    const [currentEmployeeDepartment, setCurrentEmployeeDepartment] = useState("")
    const [currentEmployeeSupervisor, setCurrentEmployeeSupervisor] = useState("")
    const [currentEmployeeImage, setCurrentEmployeeImage] = useState<File | null>(null)

    const handleOnEdit = useCallback(
        () => setIsEditClicked(!isEditClicked), [isEditClicked],
    );

    const handleOnEmployeeFIO = useCallback(
        (e: string) => setCurrentEmployeeFIO(e), [],
    );
    const handleOnEmployeeEmail = useCallback(
        (e: string) => setCurrentEmployeeEmail(e), [],
    );
    const handleOnEmployeePhone = useCallback(
        (e: string) => setCurrentEmployeePhone(e), [],
    );
    const handleOnEmployeeJob = useCallback(
        (e: string) => setCurrentEmployeeJob(e), [],
    );
    const handleOnEmployeeDepartment = useCallback(
        (e: string) => setCurrentEmployeeDepartment(e), [],
    );
    const handleOnEmployeeSupervisor = useCallback(
        (e: string) => setCurrentEmployeeSupervisor(e), [],
    );
    const handleOnEmployeeImage = useCallback(
        (e: File | null) => setCurrentEmployeeImage(e), [],
    );

    return (
        <main className="personalArea">
            <Header/>
            <div className="personalArea__container">
                {
                    isEditClicked
                        ?
                        <Suspense fallback={<Loading/>}>
                            <EditingPage handleOnEdit={handleOnEdit}
                                         id={employeeActionsStore.currentEmployeeInfo?.id || ""}
                                         email={employeeActionsStore.currentEmployeeInfo?.email || ""}
                                         fio={employeeActionsStore.currentEmployeeInfo?.fio || ""}
                                         position={employeeActionsStore.currentEmployeeInfo?.position || ""}
                                         phone_number={employeeActionsStore.currentEmployeeInfo?.phone_number || ""}
                                         department={employeeActionsStore.currentEmployeeInfo?.department || ""}
                                         employee_head={employeeActionsStore.currentEmployeeInfo?.employee_head || ""}
                                         s3_avatar_file={employeeActionsStore.currentEmployeeInfo?.s3_avatar_file || null}
                                         handleOnEmployeeFIO={handleOnEmployeeFIO}
                                         handleOnEmployeeEmail={handleOnEmployeeEmail}
                                         handleOnEmployeePhone={handleOnEmployeePhone}
                                         handleOnEmployeeJob={handleOnEmployeeJob}
                                         handleOnEmployeeDepartment={handleOnEmployeeDepartment}
                                         handleOnEmployeeSupervisor={handleOnEmployeeSupervisor}
                                         handleOnEmployeeImage={handleOnEmployeeImage}/>
                        </Suspense>
                        :
                        <div>
                            <UserInfo handleOnEdit={handleOnEdit}
                                      id={employeeActionsStore.currentEmployeeInfo?.id || ""}
                                      email={employeeActionsStore.currentEmployeeInfo?.email || ""}
                                      fio={employeeActionsStore.currentEmployeeInfo?.fio || ""}
                                      position={employeeActionsStore.currentEmployeeInfo?.position || ""}
                                      phone_number={employeeActionsStore.currentEmployeeInfo?.phone_number || ""}
                                      department={employeeActionsStore.currentEmployeeInfo?.department || ""}
                                      employee_head={employeeActionsStore.currentEmployeeInfo?.employee_head || ""}
                                      s3_avatar_file={employeeActionsStore.currentEmployeeInfo?.s3_avatar_file || null}/>
                            <Kanban/>
                        </div>
                }
            </div>
        </main>
    );
})

export default PersonalArea;

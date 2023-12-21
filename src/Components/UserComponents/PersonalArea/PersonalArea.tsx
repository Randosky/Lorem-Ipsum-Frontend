import React, {lazy, Suspense, useCallback, useEffect, useState} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import UserInfo from "./UserInfo/UserInfo";
import Header from "../../../UI/Header/Header";
import Kanban from "./Kanban/Kanban";
import Loading from "../../AdditionalComponets/LoadingPage/Loading";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";

const PersonalArea: React.FC = React.memo(() => {
    const EditingPage = lazy(() => import("../EditingPage/EditingPage"))

    const [isEditClicked, setIsEditClicked] = useState(false);
    const [currentEmployeeFIO, setCurrentEmployeeFIO] = useState("Тестовый Тест Тестович")
    const [currentEmployeeEmail, setCurrentEmployeeEmail] = useState("ttestovii@brusnika.ru")
    const [currentEmployeePhone, setCurrentEmployeePhone] = useState("8-963-094-68-34")
    const [currentEmployeeJob, setCurrentEmployeeJob] = useState("Специалист1")
    const [currentEmployeeDepartment, setCurrentEmployeeDepartment] = useState("Аналитический отдел")
    const [currentEmployeeSupervisor, setCurrentEmployeeSupervisor] = useState("Пробковый Пробка Пробкович")
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

    useEffect(() => {
        employeeActionsStore.getEmployeeProfileInfo().then()
    }, [])

    return (
        <main className="personalArea">
            <Header/>
            <div className="personalArea__container">
                {
                    isEditClicked
                        ?
                        <Suspense fallback={<Loading/>}>
                            <EditingPage handleOnEdit={handleOnEdit}
                                         email={currentEmployeeEmail} fio={currentEmployeeFIO}
                                         job={currentEmployeeJob} phone={currentEmployeePhone}
                                         department={currentEmployeeDepartment} supervisor={currentEmployeeSupervisor}
                                         image={currentEmployeeImage}
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
                                      email={currentEmployeeEmail} fio={currentEmployeeFIO}
                                      job={currentEmployeeJob} phone={currentEmployeePhone}
                                      department={currentEmployeeDepartment} supervisor={currentEmployeeSupervisor}
                                      image={currentEmployeeImage}/>
                            <Kanban/>
                        </div>
                }
            </div>
        </main>
    );
})

export default PersonalArea;

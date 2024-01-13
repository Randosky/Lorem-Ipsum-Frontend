import React, {useCallback, useEffect, useState} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import Header from "../../../UI/Header/Header";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import {observer} from "mobx-react-lite";
import EditingPage from "../EditingPage/EditingPage";
import UserInfo from "./UserInfo/UserInfo";
import Kanban from "./Kanban/Kanban";

const PersonalArea: React.FC = observer(() => {

    const employeeInfo = employeeActionsStore.currentEmployeeInfo

    useEffect(() => {
        employeeActionsStore.getEmployeeProfileInfoByAccessToken()
            .then((data) => data ? employeeActionsStore.getEmployeeProfilePhoto(data.result?.id) : null)
    }, [])

    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleOnEdit = useCallback(
        () => setIsEditClicked(!isEditClicked), [isEditClicked],
    );

    return (
        <main className="personalArea">
            <Header/>
            <div className="personalArea__container">
                {
                    employeeInfo
                        ?
                        isEditClicked
                            ?
                            <EditingPage handleOnEdit={handleOnEdit}
                                         employeeInfo={employeeInfo}/>
                            :
                            <div>
                                <UserInfo handleOnEdit={handleOnEdit}
                                          employeeInfo={employeeInfo}/>
                                <Kanban/>
                            </div>
                        : ""
                }
            </div>
        </main>
    );
})

export default PersonalArea;

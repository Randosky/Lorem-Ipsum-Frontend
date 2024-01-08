import React, {useCallback, useEffect, useState} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import Header from "../../../UI/Header/Header";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import {observer} from "mobx-react-lite";
import EditingPage from "../EditingPage/EditingPage";
import UserInfo from "./UserInfo/UserInfo";
import Kanban from "./Kanban/Kanban";

const PersonalArea: React.FC = observer(() => {

    useEffect(() => {
        employeeActionsStore.getEmployeeProfileInfoByAccessToken()
            .then((data) => data ? employeeActionsStore.getEmployeeProfilePhoto(data.result.id) : null)
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
                    employeeActionsStore.currentEmployeeInfo
                        ?
                        isEditClicked
                            ?
                            <EditingPage handleOnEdit={handleOnEdit}
                                         employeeInfo={employeeActionsStore.currentEmployeeInfo}/>
                            :
                            <div>
                                <UserInfo handleOnEdit={handleOnEdit}
                                          employeeInfo={employeeActionsStore.currentEmployeeInfo}/>
                                <Kanban/>
                            </div>
                        : ""
                    // <RefreshSession/>
                }
            </div>
        </main>
    );
})

export default PersonalArea;

import React, {lazy, Suspense, useCallback, useEffect, useState} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import Header from "../../../UI/Header/Header";
import Loading from "../../AdditionalComponets/LoadingPage/Loading";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import authStore from "../../../Store/AuthStore";
import {observer} from "mobx-react-lite";
import EditingPage from "../EditingPage/EditingPage";
import UserInfo from "./UserInfo/UserInfo";
import Kanban from "./Kanban/Kanban";
import RefreshSession from "../RefreshSession/RefreshSession";

const PersonalArea: React.FC = observer(() => {

    useEffect(() => {
        authStore.refreshSession()
            .then(() => employeeActionsStore.getEmployeeProfileInfoByAccessToken()
                .then((data) => employeeActionsStore.getEmployeeProfilePhoto(data.result.id)))
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
                        :
                        <RefreshSession/>
                }
            </div>
        </main>
    );
})

export default PersonalArea;

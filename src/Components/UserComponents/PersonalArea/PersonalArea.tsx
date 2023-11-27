import React, {lazy, Suspense} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import UserInfo from "./UserInfo/UserInfo";
import Header from "../../../UI/Header/Header";
import Kanban from "./Kanban/Kanban";
import Loading from "../../AdditionalComponets/LoadingPage/Loading";
import employeeActionsStore from "../../../Store/EmployeeActionsStore";
import {observer} from "mobx-react-lite";

const PersonalArea: React.FC = observer(() => {
    const EditingPage = lazy(() => import("../EditingPage/EditingPage"))

    return (
        <main className="personalArea">
            <Header/>
            <div className="personalArea__container">
                {
                    employeeActionsStore.isEditClicked
                        ?
                        <Suspense fallback={<Loading/>}>
                            <EditingPage/>
                        </Suspense>
                        :
                        <div>
                            <UserInfo/>
                            <Kanban/>
                        </div>
                }
            </div>
        </main>
    );
})

export default PersonalArea;

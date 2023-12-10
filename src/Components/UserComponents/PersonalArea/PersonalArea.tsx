import React, {lazy, Suspense, useCallback, useState} from 'react';
import "../../../Styles/PersonalArea/PersonalArea.scss"
import UserInfo from "./UserInfo/UserInfo";
import Header from "../../../UI/Header/Header";
import Kanban from "./Kanban/Kanban";
import Loading from "../../AdditionalComponets/LoadingPage/Loading";

const PersonalArea: React.FC = () => {
    const EditingPage = lazy(() => import("../EditingPage/EditingPage"))
    const [isEditClicked, setIsEditClicked] = useState(false);

    const handleOnEdit = useCallback(
        () => setIsEditClicked(!isEditClicked), [isEditClicked],
    );


    return (
        <main className="personalArea">
            <Header/>
            <div className="personalArea__container">
                {
                    isEditClicked
                        ?
                        <Suspense fallback={<Loading/>}>
                            <EditingPage handleOnEdit={handleOnEdit}/>
                        </Suspense>
                        :
                        <div>
                            <UserInfo handleOnEdit={handleOnEdit}/>
                            <Kanban/>
                        </div>
                }
            </div>
        </main>
    );
}

export default PersonalArea;

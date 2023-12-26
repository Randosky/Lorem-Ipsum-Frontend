import React from 'react';
import authStore from "../../../Store/AuthStore";
import {useNavigate} from "react-router-dom";

const RefreshSession: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Время текущей сессии истекло</p>
            <button
                onClick={() => authStore.refreshSession().then(() => navigate("/")).then(() => window.location.reload())}>
                Продлить сессию
            </button>
        </div>
    );
};

export default RefreshSession;

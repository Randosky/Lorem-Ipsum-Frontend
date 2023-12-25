import React from 'react';
import authStore from "../../../Store/AuthStore";

const RefreshSession: React.FC = () => {
    return (
        <div>
            <p>Время текущей сессии истекло</p>
            <button onClick={() => authStore.refreshSession().then(() => window.location.reload())}>
                Продлить сессию
            </button>
        </div>
    );
};

export default RefreshSession;

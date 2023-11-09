import React, {ReactNode} from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import PersonalArea from "../Components/UserComponents/PersonalArea/PersonalArea";
import Register from "../Components/AuthComponents/Register/Register";
import Auth from "../Components/AuthComponents/Auth/Auth";

type RouteType = {
    path: string,
    element: ReactNode,
}

const AppRouter: React.FC = () => {
    const publicRoutes: RouteType[] = [
        {
            path: "/login",
            element: <Auth/>
        },
        {
            path: "/register",
            element: <Register/>,
        }
    ]

    const privateRoutes: RouteType[] = [
        {
            path: "/",
            element: <PersonalArea/>,
        },
    ]

    const location = useLocation()
    const isAuth = true

    return (
        isAuth ?
            (
                privateRoutes.findIndex(comp => comp.path === location.pathname) !== -1
                    ?
                    <Routes>
                        {
                            privateRoutes.map(({path, element}, index) =>
                                <Route path={path} element={element} key={index}/>
                            )
                        }
                    </Routes>
                    :
                    <Navigate to="/"/>

            ) :
            (
                publicRoutes.findIndex(comp => comp.path === location.pathname) !== -1
                    ?
                    <Routes>
                        {
                            publicRoutes.map(({path, element}, index) =>
                                <Route path={path} element={element} key={index}/>
                            )
                        }
                    </Routes>
                    :
                    <Navigate to="/login"/>
            )
    );
};

export default AppRouter;

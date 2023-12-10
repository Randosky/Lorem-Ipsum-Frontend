import React, {ReactNode} from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import PersonalArea from "../Components/UserComponents/PersonalArea/PersonalArea";
import Auth from "../Components/AuthComponents/Auth/Auth";

type RouteType = {
    path: string,
    element: ReactNode,
}

const AppRouter: React.FC = () => {
    const publicRoutes: RouteType[] = [
        {
            path: "/authentication",
            element: <Auth/>
        },
    ]

    const privateRoutes: RouteType[] = [
        {
            path: "/personalArea",
            element: <PersonalArea/>,
        },
        {
            path: "/authentication",
            element: <Auth/>
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
                    <Navigate to="/authentication"/>

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
                    <Navigate to="/authentication"/>
            )
    );
};

export default AppRouter;

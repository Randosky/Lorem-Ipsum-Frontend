import React, {ReactNode} from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom";
import PersonalArea from "../Components/UserComponents/PersonalArea/PersonalArea";
import Auth from "../Components/AuthComponents/Auth/Auth";
import LandList from "../Components/LandComponents/LandList/LandList";
import LandCard from "../Components/LandComponents/LandCard/LandCard";
import AddLand from "../Components/LandComponents/AddLand/AddLand";

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
        {
            path: "/addLand",
            element: <AddLand/>,
        },
        {
            path: "/landList",
            element: <LandList/>
        },
        {
            path: "/landCard/:landCardId",
            element: <LandCard/>
        }
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
                    <Navigate to="/personalArea"/>

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

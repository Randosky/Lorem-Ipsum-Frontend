import React from 'react';
import {BrowserRouter} from "react-router-dom"
import AppRouter from "./Router/AppRouter";
import "./Styles/App.scss"

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;

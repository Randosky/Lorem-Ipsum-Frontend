import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Header from "./UI/Header/Header";

const isAuth = true

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {
            isAuth
                ? <Header/>
                : ""
        }
        <App/>
    </React.StrictMode>,
)

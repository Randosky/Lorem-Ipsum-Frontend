import React, {useEffect} from 'react';
import {AuthProps} from "../../../Types/Auth/AuthProps";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import PasswordVisibility from "../../../Assets/Svg/PasswordVisibility";
import PasswordNoVisibility from "../../../Assets/Svg/PasswordNoVisibility";
import ButtonContrast from "../../../UI/MyButton/ButtonContrast";
import authStore from "../../../Store/AuthStore";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

interface SignInProps extends AuthProps {

}

const SignIn: React.FC<SignInProps> = observer((props: SignInProps) => {
    const {
        currentEmployeeEmail, handleOnEmail, currentEmployeePassword,
        handleOnPassword, currentPasswordVisibility, handleOnPasswordVisibility,
        handleOnCurrentStage
    } = props

    const navigate = useNavigate()

    return (
        <section className="auth__modal auth__signIn">
            <h1 className="auth__title">
                CRM-система Земельного&nbsp;банка
            </h1>
            <div className="auth__login">
                <MyInputWithPrefix prefixText="Введите логин"
                                   inputStyle="auth__input"
                                   type="text"
                                   value={currentEmployeeEmail}
                                   handleOnChange={handleOnEmail}/>
            </div>
            <div className="auth__password">
                <MyInputWithPrefix prefixText="Введите пароль"
                                   inputStyle="auth__input"
                                   type={currentPasswordVisibility ? "text" : "password"}
                                   value={currentEmployeePassword}
                                   handleOnChange={handleOnPassword}/>
                {
                    currentPasswordVisibility
                        ?
                        <div className="auth__password-visibility"
                             onClick={handleOnPasswordVisibility}>
                            <PasswordVisibility/>
                        </div>
                        :
                        <div className="auth__password-visibility"
                             onClick={handleOnPasswordVisibility}>
                            <PasswordNoVisibility/>
                        </div>
                }
            </div>
            <div className="auth__buttons">
                <ButtonContrast
                    btnStyle="auth__buttons-signIn"
                    btnText="Войти"
                    handleOnClick={() => authStore.signIn(currentEmployeeEmail, currentEmployeePassword)
                        .then((response) => response ? navigate("/personalArea") : "")}/>
                <ButtonContrast
                    btnStyle="auth__buttons-register"
                    btnText='Зарегистрироваться'
                    handleOnClick={() => handleOnCurrentStage("register")}/>
                <p className="auth__buttons-text">
                    Забыли пароль?
                </p>
            </div>
        </section>
    );
});

export default SignIn;

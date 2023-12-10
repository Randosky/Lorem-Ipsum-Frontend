import React from 'react';
import {AuthProps} from "../../../Types/Auth/AuthProps";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import PasswordVisibility from "../../../Assets/Svg/PasswordVisibility";
import PasswordNoVisibility from "../../../Assets/Svg/PasswordNoVisibility";
import ButtonContrast from "../../../UI/MyButton/ButtonContrast";
import authStore from "../../../Store/AuthStore";
import {useNavigate} from "react-router-dom";

interface SignInProps extends AuthProps {

}

const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
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
            <MyInputWithPrefix inputStyle="auth__input auth__login"
                               prefixText="Введите логин"
                               prefixStyle="auth__prefix login__prefix"
                               type="text"
                               value={currentEmployeeEmail}
                               handleOnChange={handleOnEmail}/>
            <div className="auth__password">
                <MyInputWithPrefix inputStyle="auth__input auth__password-input"
                                   prefixText="Введите пароль"
                                   type={currentPasswordVisibility ? "text" : "password"}
                                   prefixStyle="auth__prefix password__prefix"
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
                    handleOnClick={() => authStore.signIn().then(() => navigate("/personalArea"))}/>
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
};

export default SignIn;

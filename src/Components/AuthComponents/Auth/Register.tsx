import React from 'react';
import {AuthProps} from "../../../Types/Auth/AuthProps";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import PasswordVisibility from "../../../Assets/Svg/PasswordVisibility";
import PasswordNoVisibility from "../../../Assets/Svg/PasswordNoVisibility";
import ButtonContrast from "../../../UI/MyButton/ButtonContrast";
import authStore from "../../../Store/AuthStore";
import {useNavigate} from "react-router-dom";

interface RegisterProps extends AuthProps {

}


const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
    const {
        currentEmployeeEmail, handleOnEmail, currentEmployeePassword,
        handleOnPassword, currentPasswordVisibility, handleOnPasswordVisibility,
        handleOnCurrentStage
    } = props

    const navigate = useNavigate()

    return (
        <section className="auth__modal auth__register">
            <h1 className="auth__title">
                CRM-система Земельного&nbsp;банка
            </h1>
            <MyInputWithPrefix inputStyle="auth__input auth__login"
                               prefixText="Введите логин"
                               prefixStyle="auth__prefix login__prefix"
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
                    btnStyle="auth__buttons-register"
                    btnText='Зарегистрироваться'
                    handleOnClick={() => authStore.register().then(() => navigate("/personalArea"))}/>
                <p className="auth__buttons-text"
                   onClick={() => handleOnCurrentStage("signIn")}>
                    Назад
                </p>
            </div>
        </section>
    );
};

export default Register;

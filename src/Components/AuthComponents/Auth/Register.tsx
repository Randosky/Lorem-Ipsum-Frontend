import React, {useEffect} from 'react';
import {AuthProps} from "../../../Types/Auth/AuthProps";
import MyInputWithPrefix from "../../../UI/MyInput/MyInputWithPrefix";
import PasswordVisibility from "../../../Assets/Svg/PasswordVisibility";
import PasswordNoVisibility from "../../../Assets/Svg/PasswordNoVisibility";
import ButtonContrast from "../../../UI/MyButton/ButtonContrast";
import authStore from "../../../Store/AuthStore";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

interface RegisterProps extends AuthProps {

}


const Register: React.FC<RegisterProps> = observer((props: RegisterProps) => {
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
            <div className="auth__login">
                <MyInputWithPrefix prefixText="Введите почту"
                                   inputStyle="auth__input"
                                   errorStyle="auth__error"
                                   errorText={authStore.checkEmailError(currentEmployeeEmail)}
                                   type="text"
                                   value={currentEmployeeEmail}
                                   handleOnChange={handleOnEmail}/>
            </div>
            <div className="auth__password">
                <MyInputWithPrefix prefixText="Введите пароль"
                                   inputStyle="auth__input"
                                   errorStyle="auth__error"
                                   errorText={authStore.checkPasswordError(currentEmployeePassword)}
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
                    btnStyle="auth__buttons-register"
                    btnText='Зарегистрироваться'
                    handleOnClick={() => authStore.register(currentEmployeeEmail, currentEmployeePassword)
                        .then((response) => response ? handleOnCurrentStage("signIn") : "")}/>
                <p className="auth__buttons-text"
                   onClick={() => handleOnCurrentStage("signIn")}>
                    Назад
                </p>
            </div>
        </section>
    );
});

export default Register;

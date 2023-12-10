import React, {useCallback, useState} from 'react';
import SignIn from "./SignIn";
import Register from "./Register";
import BigLogo from "../../../Assets/Svg/BigLogo";
import "../../../Styles/Auth/AuthStyles.scss"

const Auth: React.FC = () => {
    const [currentEmployeeEmail, setCurrentEmployeeEmail] = useState("");
    const [currentEmployeePassword, setCurrentEmployeePassword] = useState("");
    const [currentPasswordVisibility, setCurrentPasswordVisibility] = useState(false);
    const [currentAuthStage, setCurrentAuthStage] = useState("signIn");

    const handleOnEmail = useCallback((e: React.FormEvent<HTMLInputElement>) =>
        setCurrentEmployeeEmail(e.currentTarget.value), [],
    );

    const handleOnPassword = useCallback((e: React.FormEvent<HTMLInputElement>) =>
        setCurrentEmployeePassword(e.currentTarget.value), [],
    );

    const handleOnPasswordVisibility = useCallback(() =>
        setCurrentPasswordVisibility(!currentPasswordVisibility), [currentPasswordVisibility],
    );

    const handleOnCurrentStage = useCallback((e: string) =>
        setCurrentAuthStage(e), [],
    );

    function getCurrentStage(stage: string) {
        switch (stage) {
            case "signIn":
                return <SignIn currentEmployeeEmail={currentEmployeeEmail}
                               handleOnEmail={handleOnEmail}
                               currentEmployeePassword={currentEmployeePassword}
                               handleOnPassword={handleOnPassword}
                               currentPasswordVisibility={currentPasswordVisibility}
                               handleOnPasswordVisibility={handleOnPasswordVisibility}
                               handleOnCurrentStage={handleOnCurrentStage}/>
            case "register":
                return <Register currentEmployeeEmail={currentEmployeeEmail}
                                 handleOnEmail={handleOnEmail}
                                 currentEmployeePassword={currentEmployeePassword}
                                 handleOnPassword={handleOnPassword}
                                 currentPasswordVisibility={currentPasswordVisibility}
                                 handleOnPasswordVisibility={handleOnPasswordVisibility}
                                 handleOnCurrentStage={handleOnCurrentStage}/>
        }
    }


    return (
        <main className="auth">
            <header className="auth__header">
                <BigLogo/>
            </header>
            {
                getCurrentStage(currentAuthStage)
            }
        </main>
    );
};

export default Auth;

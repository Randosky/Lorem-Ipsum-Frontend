import React from "react";

export interface AuthProps {
    currentEmployeeEmail: string,
    handleOnEmail: (e: React.FormEvent<HTMLInputElement>) => void,
    currentEmployeePassword: string,
    handleOnPassword: (e: React.FormEvent<HTMLInputElement>) => void,
    currentPasswordVisibility: boolean,
    handleOnPasswordVisibility: () => void,
    handleOnCurrentStage: (e: string) => void,
}
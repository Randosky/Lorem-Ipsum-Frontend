import {makeAutoObservable} from "mobx";

class EmployeeActionsStore {
    currentEmployeeFIO: string = "Тестовый Тест Тестович";
    currentEmployeeEmail: string = "ttestovii@brusnika.ru";
    currentEmployeePhone: string = "8-963-094-68-34";
    currentEmployeeJob: string = "Специалист1";
    currentEmployeeDepartment: string = "Аналитический отдел";
    currentEmployeeSupervisor: string = "Пробковый Пробка Пробкович";
    currentEmployeeImage: File | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    updateCurrentEmployeeFIO(fio: string) {
        this.currentEmployeeFIO = fio;
    }

    updateCurrentEmployeeEmail(email: string) {
        this.currentEmployeeEmail = email;
    }

    updateCurrentEmployeePhone(phone: string) {
        this.currentEmployeePhone = phone;
    }

    updateCurrentEmployeeJob(job: string) {
        this.currentEmployeeJob = job;
    }

    updateCurrentEmployeeDepartment(department: string) {
        this.currentEmployeeDepartment = department;
    }

    updateCurrentEmployeeSupervisor(supervisor: string) {
        this.currentEmployeeSupervisor = supervisor;
    }

    updateCurrentEmployeeImage(image: FileList | null) {
        if (image) {
            console.log(image[0])
            this.currentEmployeeImage = image[0];
        }
    }

    async saveCurrentEmployeeData() {

    }
}

export default new EmployeeActionsStore()
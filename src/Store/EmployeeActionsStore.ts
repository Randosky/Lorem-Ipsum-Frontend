import {makeAutoObservable} from "mobx";
import {IEmployeeType} from "../Types/EmployeeType";

class EmployeeActionsStore {

    isEditClicked: boolean = false;
    employee: IEmployeeType = {
        fio: "Тестовый Тест Тестович",
        email: "ttestovii@brusnika.ru",
        phone: "8-963-094-68-34",
        job: "Специалист1",
        department: "Аналитический отдел",
        supervisor: "Пробковый Пробка Пробкович",
    }
    currentEmployeeFIO: string = "";
    currentEmployeeEmail: string = "";
    currentEmployeePhone: string = "";
    currentEmployeeJob: string = "";
    currentEmployeeDepartment: string = "";
    currentEmployeeSupervisor: string = "";
    currentEmployeeImage: File | null = null;

    constructor() {
        makeAutoObservable(this)
    }

    updateIsEditingClicked() {
        this.isEditClicked = !this.isEditClicked
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

    saveCurrentEmployeeData() {

    }
}

export default new EmployeeActionsStore()
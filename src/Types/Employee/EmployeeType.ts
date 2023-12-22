export interface IEmployeeType {
    id: string,
    email: string,
    last_name: string,
    first_name: string,
    patronymic: string,
    phone_number: string | null,
    s3_avatar_file: string | null,
    position_id: string | null,
    department_id: string | null,
    employee_head: {
        id: string,
        email: string,
        last_name: string,
        first_name: string,
        patronymic: string,
        phone_number: string,
        s3_avatar_file: string,
        department_id: string
        position_id: string,
    } | null,
    position: {
        id: string,
        position_name: string,
        is_director_position: boolean
    } | null,
    department: {
        id: string,
        department_name: string
    } | null
}
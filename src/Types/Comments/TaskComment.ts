export interface TaskComment {
    task_id: string,
    text: string,
    id: string,
    employee_id: string,
    created_at: string,
    employee: {
        id: string,
        email: string,
        last_name: string,
        first_name: string
    }
}
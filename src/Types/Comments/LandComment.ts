export interface LandComment {
    comment_text: string,
    land_area_id: string,
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
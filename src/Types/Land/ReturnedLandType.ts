export interface ReturnedLandType {
    name: string,
    cadastral_number: string,
    area_category: string,
    area_square: number,
    address: string,
    search_channel: string,
    id: string,
    entered_at_base: string,
    working_status_id: string,
    stage_id: string,
    stage: {
        id: string,
        stage_name: string
    },
    status: {
        id: string,
        status_name: string
    },
    area_buildings: {
        name: string,
        description: string,
        commissioning_year: string,
        id: string,
        land_area_id: string
    }[],
    owners: {
        name: string,
        email: string,
        phone_number: string,
        location: string,
        id: string,
        land_area_id: string
    }[],
    comments: {
        id: string,
        employee_id: string,
        created_at: string,
        employee: {
            id: string,
            email: string,
            last_name: string,
            first_name: string
        }
    }[]
}
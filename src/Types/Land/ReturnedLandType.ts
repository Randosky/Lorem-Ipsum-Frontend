export interface ReturnedLandType {
    name: string,
    cadastral_number: string,
    area_category: string,
    cadastral_cost: number,
    area_square: number,
    address: string,
    search_channel: string,
    id: string,
    entered_at_base: string,
    stage: string,
    working_status: string
    area_buildings: {
        name: string,
        description: string,
        commissioning_year: number,
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
        comment_text: string,
        land_area_id: string,
        employee_id: string,
        created_at: string,
        employee: {
            id: string,
            email: string,
            last_name: string,
            first_name: string
        }
    }[],
    extra_data: {
        engineering_networks: string,
        transport: string,
        result: string,
        land_area_id: string,
        id: string,
    }
}
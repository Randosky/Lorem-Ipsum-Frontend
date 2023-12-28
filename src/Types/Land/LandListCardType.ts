export interface LandListCardType {
    id: string,
    name: string,
    cadastral_number: string,
    area_category: string,
    area_square: 0,
    entered_at_base: Date,
    working_status: string,
    stage: string,
    owners: [
        {
            name: string,
            email: string,
            phone_number: string,
            location: string,
            id: string,
            land_area_id: string,
        }
    ]
}
export interface LandCardType {
    id: string,
    cadastral_number: string,
    area_category: string,
    area_square: number,
    area_cost: number,
    entered_at_base: string,
    status: {
        id: string,
        status_name: string
    },
    stage: {
        id: string,
        stage_name: string
    }
}
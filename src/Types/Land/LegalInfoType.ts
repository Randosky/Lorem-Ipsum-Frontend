export interface LegalInfoType {
    limits: {
        name: string,
        id: string
    }[],
    permitted_uses: {
        name: string,
        id: string
    }[]
}
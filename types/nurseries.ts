export type NurseryType ={
    name: string,
    address: string,
    lat: number,
    lon: number, 
    added_by: string,
    owner_name?: string,
    workers?: [],
    plants?: [],
    rating?: number,
    distance?: number,
    contact_info?: {
        phone?: string,
        email?: string
    },
    description?: string
}
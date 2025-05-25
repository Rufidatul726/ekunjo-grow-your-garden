export type Nursery ={
    id?: number; // optional if coming from Firebase or Excel
    uuid?: string;
    name: string,
    address: string,
    fulladdr?: string;
    latitude?: number;
    longitude?: number;
    added_by?: string,
    owner_name?: string,
    workers?: [],
    plants?: [],
    rating?: string | undefined;
    distance?: number | string;
    specialties?: string[];
    domain?: string;
    thumbnail?: string;
    phone_numbers?: string[];
    created_at?: string;
    source?: "mock" | "google" | "excel"; 
    description?: string
}
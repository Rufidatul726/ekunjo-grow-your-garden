import { User as FirebaseUser } from 'firebase/auth';

export type FormatAuthUserType = {
    uid: string,
    email: string
}

export interface ExtendedUser extends FirebaseUser {
    role?: string;
}

export type UserDetail = {
    email: string,
    userName: string,
    role: string
}
export enum Role {
    ADMIN = 'admin',
    USER = 'user'
}

export interface UserInterface {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role | string;
}
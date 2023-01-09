import { Model } from 'sequelize';
import { Role } from './user-interface';
export class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: Role;
    public static authenticate: (name: string, password: string) => Promise<string>;
}
/// <reference types="mongoose" />
import { CreateUserDto } from '../dtos/users.dto';
import { User } from '../interfaces/users.interface';
declare class UserService {
    users: import("mongoose").Model<User & import("mongoose").Document<any, any, any>, {}, {}>;
    findAllUser(): Promise<User[]>;
    findUserById(userId: string): Promise<User>;
    createUser(userData: CreateUserDto): Promise<User>;
    updateUser(userId: string, userData: CreateUserDto): Promise<User>;
    deleteUser(userId: string): Promise<User>;
}
export default UserService;

/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose" />
import { CreateUserDto } from '../dtos/users.dto';
import { TokenData } from '../interfaces/auth.interface';
import { User } from '../interfaces/users.interface';
import { UserLoginDto } from '../dtos/user-login.dto';
declare class AuthService {
    users: import("mongoose").Model<User & import("mongoose").Document<any, any, any>, {}, {}, {}>;
    signup(userData: CreateUserDto): Promise<User>;
    login(userData: UserLoginDto): Promise<{
        cookie: string;
        findUser: User;
    }>;
    logout(userData: {
        _id: string;
    }): Promise<User>;
    createToken(user: User): TokenData;
    createCookie(tokenData: TokenData): string;
}
export default AuthService;

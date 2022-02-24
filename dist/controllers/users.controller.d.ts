import { NextFunction, Request, Response } from 'express';
import UserService from '@services/users.service';
import { RequestWithUser } from '@interfaces/auth.interface';
declare class UsersController {
    userService: UserService;
    getUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUser: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
    deleteUser: (req: RequestWithUser, res: Response, next: NextFunction) => Promise<void>;
}
export default UsersController;

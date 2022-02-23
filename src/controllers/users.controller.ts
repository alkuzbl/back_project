import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { User } from '@interfaces/users.interface';
import UserService from '@services/users.service';
import { SECRET_KEY } from '@config';
import { verify } from 'jsonwebtoken';
import { DataStoredInToken } from '@interfaces/auth.interface';

class UsersController {
  public userService = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: User[] = await this.userService.findAllUser();

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: User = await this.userService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

      if (Authorization) {
        const verificationResponse = (await verify(Authorization, SECRET_KEY)) as DataStoredInToken;
        const userData: CreateUserDto = req.body;
        await this.userService.updateUser(verificationResponse._id, userData);

        res.status(200).json({ data: {}, message: 'Your data has been successfully updated' });
      } else {
        res.status(401).json({ message: 'Wrong authentication token' });
      }
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

      if (Authorization) {
        const verificationResponse = (await verify(Authorization, SECRET_KEY)) as DataStoredInToken;
        await this.userService.deleteUser(verificationResponse._id);

        res.status(200).json({ data: {}, message: 'We are very sorry that you are not with us :(' });
      } else {
        res.status(401).json({ message: 'Wrong authentication token' });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;

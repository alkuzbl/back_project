import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/users.interface';
import UserService from '@services/users.service';
import { RequestWithUser } from '@interfaces/auth.interface';

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

  public updateUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.user;
      await this.userService.updateUser(_id, req.body);

      res.status(200).json({ message: 'Your data has been successfully updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.user;
      await this.userService.deleteUser(_id);

      res.status(200).json({ message: 'We are very sorry that you are not with us :(' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;

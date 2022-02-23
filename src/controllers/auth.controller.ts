import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { UserLoginDto } from '@dtos/user-login.dto';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      await this.authService.signup(userData);

      res.status(201).json({ data: {}, message: 'You have successfully registered' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: UserLoginDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);

      if (Authorization) {
        const verificationResponse = (await verify(Authorization, SECRET_KEY)) as DataStoredInToken;
        const userId = verificationResponse._id;
        await this.authService.logout({ _id: userId });

        res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
        res.status(200).json({ data: {}, message: 'We are waiting for you again' });
      } else {
        res.status(401).json({ message: 'Wrong authentication token' });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;

import UserRepository from '../infrastructure/user-repository';
import IUser from '../shared/models/user';

class UserService {
    public static async getAllUsers(): Promise<IUser[]> {
        const dbUsers: IUser[] = await UserRepository.getAllUsers();
        return new Promise<IUser[]>((res, rej): void => res(dbUsers));
    }
}

export default UserService;

import IUser from '../shared/models/user';

class UserRepository {
    public static getAllUsers(): Promise<IUser[]> {
        return new Promise((res, rej): void => res(this.users));
    }

    private static users: IUser[] = [
        {
            email: 'tylerjbrown192@gmail.com',
            username: 'Tyler',
        },
        {
            email: 'tyler.brown2@nike.com',
            username: 'Brown'
        }
    ];

}

export default UserRepository;

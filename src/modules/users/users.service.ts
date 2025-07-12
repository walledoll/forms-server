import { UserCreateDto } from './dto/userCreate.dto';
import { IUserCreateResponse, IUsersData } from './users.interface';
import { v4 as uuid } from 'uuid';

export class UsersService {
  private usersDB: Record<string, IUsersData> = {};

  getAll(): IUsersData[] {
    return Object.values(this.usersDB);
  }

  createUser(data: UserCreateDto): IUserCreateResponse {
    const id = uuid();

    this.usersDB[id] = { ...data, id };

    const { name } = data;

    return { name, id };
  }

  deleteUser(id: string): void {
    delete this.usersDB[id];
  }
}

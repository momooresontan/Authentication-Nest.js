import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Momooreoluwa',
      username: 'MoMo',
      password: 'test1234',
    },
    {
      id: 2,
      name: 'Sontan',
      username: 'sontan',
      password: 'test1234',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}

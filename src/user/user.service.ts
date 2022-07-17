import { Injectable } from '@nestjs/common';

import { UserEntity as User } from './entities';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      username: 'bob',
      password: 'bob',
    },
    {
      username: 'sam',
      password: 'sam',
    },
    {
      username: 'bill',
      password: 'bill',
    },
    {
      username: 'max',
      password: 'max',
    },
  ];

  findAll() {
    return this.users.map(
      (user) => new User(user)
    );
  }
}

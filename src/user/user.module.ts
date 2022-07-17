import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [
    UserController,
  ],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
})
export class UserModule { }

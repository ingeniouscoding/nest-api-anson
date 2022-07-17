import {
  Controller,
  Inject,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: UserService
  ) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  index() {
    return this.userService.findAll();
  }
}

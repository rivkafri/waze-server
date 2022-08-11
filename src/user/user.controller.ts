import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { query } from 'express';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() newUser: User) {
    debugger;
    return this.userService.createUser(newUser);
  }

  @Put(':id')
  updateUser(@Param('id') userId: string, @Body() updateUser: User) {
    this.userService.updateUser(userId, updateUser);
  }

  @Delete(':id')
  deleteUser(@Param('id') userId: string) {
    this.userService.deleteUser(userId);
  }
  @Get(':uid')
  getUserByUid(@Param('uid') uid: string) {
    return this.userService.getUserByUid(uid);
  }

  @Get('getUserByEmail/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Get('getUserById/:id')
  getUserById(@Param('id') userId: string) {
    return this.userService.getUserById(userId);
  }

  @Get()
  getAll() {
    return this.userService.getUsers();
  }
}

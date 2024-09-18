/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Delete, Req, Body, HttpCode,Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')                     //signifies that we are using this controller for users
export class UsersController {            //class that contains various controllers for various http headers

  @Get('/profile/:id')
  getProfile(@Param('id') id: string) {          //http header - http://localhost:3000/users/profile
    // Example logic based on the dynamic ID 
    if (id === '1') {
      return {                                   //no need of response bcz we just return the data in nestjs
        id: id,
        username: 'JohnDoe',
        email: 'johndoe@example.com'
      };
    } else if (id === '2') {
      return {
        id: id,
        username: 'JaneDoe',
        email: 'janedoe@example.com'
      };
    } else {
      return { message: 'User not found' };
    }
  }

  @Post('/create')
  @HttpCode(200)           // defining hhtp status code in case we use any other
  createUser(@Body() body: any) {
    return { message: 'User created', data: body };
  }

  @Delete('/delete')
  deleteUser(@Body() body: any) {
    return { message: 'User deleted', data: body };
  }
}


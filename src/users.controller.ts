/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  
  @Get('/profile')
  getProfile() {
    return {
      username: 'JohnDoe',
      email: 'johndoe@example.com',
    };
  }
}

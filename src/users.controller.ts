/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Post, Delete, Req, Body, HttpCode,Param ,Query} from '@nestjs/common';
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

  @Get('page')                              //Query paramters used to retrieve data for specific paramter that u pass
  getUsers(@Query('page') page: string, @Query('limit') limit: string) {
    return `Page: ${page}, Limit: ${limit}`;
  }

  // Purpose: You're requesting a list of users from the server with pagination, and you pass page=1 and limit=10 as query parameters to customize the data retrieved.


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



// The GET method is used to retrieve data from the server without modifying it. For example:

//     Fetching user profiles: GET /users/profile retrieves user details.
//     Listing all users: GET /users returns a list of users.

// In summary, GET is for reading data, whereas POST is for creating or submitting data.

// GET requests are meant for retrieving data from the server. Query parameters are used to pass data that helps specify what data you want to retrieve (e.g., filtering, sorting, pagination).
// POST requests are used to send data to the server, such as when creating or updating resources. In this case, the data is usually sent in the request body, not through query parameters.
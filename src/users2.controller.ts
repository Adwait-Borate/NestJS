import { Controller, Get, Post, Delete, Req, Body, HttpCode,Param ,Query} from '@nestjs/common';

@Controller({path:'/users', host:':app.domain.com'})  //here u mention on which host should this controller work
//we have already mentioned the route (users).

export class UsersController{
    @Get()
    getUsers(){
        return 'Hello World'
    }
}
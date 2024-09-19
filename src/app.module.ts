/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {UsersController} from './users1.controller'


@Module({
  controllers: [UsersController],
})
export class AppModule {}

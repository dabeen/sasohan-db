import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { query } from 'express';
import { UserDto } from 'src/dto/user.dto';
import { User } from '../entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}
 
    @Get('all')
    async getAll():Promise<User[]>{
        return await this.userService.findAll();
    }

    @Post('register')
    async registerUser(@Res() res, @Body() createUserDto: UserDto) {
        const newUser = await this.userService.createOneUser(createUserDto);
        return res.status(HttpStatus.OK).json({
            user: newUser,
            querySuccess: true,
        });
    }

    @Get(":id") 
    async getOne(@Res() res, @Param("id") user_id: string) {
        const result = await this.userService.getOne(user_id);
        if(!result) {
            throw new NotFoundException('User does not exist.')
        }
        return res.status(HttpStatus.OK).json({
            result,
            querySuccess: true,
        });
    }

    @Put(":id")
    async setOne(@Param("id") user_id: string, @Body() updateUserDto: UserDto) {
        const result = await this.userService.updateOneUser(user_id, updateUserDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") user_id: string) {
        const ret = await this.userService.deleteOneUser(user_id);
        return ret;
    }

}

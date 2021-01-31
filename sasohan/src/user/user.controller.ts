import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Post()
    async create(@Body() createUserDto: UserDto) {
        const result = await this.userService.createOneUser(createUserDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") User_id: string) {
        const result = await this.userService.getOne(User_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") User_id: string, @Body() updateUserDto: UserDto) {
        const result = await this.userService.updateOneUser(User_id, updateUserDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") User_id: string) {
        const ret = await this.userService.deleteOneUser(User_id);
        return ret;
    }

}

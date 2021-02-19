import { Body, Controller, Delete, Get, HttpStatus, Logger, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { UpdateUserDTO, UserDTO } from 'src/dto/user.dto';
import { User } from '../entity/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get('all')
    async getAllUser() {
        // this returns all User in sasohan database 
        try {
            const allUser = await this.userService.getAll();
            return {
                user: allUser,
                success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }
    }

    @Get(":id")
    async getOneUser(@Param("id") user_id: string) {
        // this returns one User in sasohan database
        try {
            const result = await this.userService.getOne(user_id);
            return {
              user: result,
              success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }
    }
    
    @Post("register")
    async registerOneUser(@Body() createUserDTO: UserDTO) {
        // This returns the success of creating (a) new User(s) and returns an error message if an error occurs.
        try {
            await this.userService.createOneUser(createUserDTO);
            return { success : true }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    
    @Delete(":id")
    async deleteOneUser(@Param("id") user_id: string) {
        // This returns the success of the User deletion, and returns an error message if an error occurs.
        try {
            await this.userService.deleteOneUser(user_id);
            return { success : true }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    @Put(":id")
    async updateOneUser(@Param("id") user_id: string, @Body() UpdateUserDTO: UpdateUserDTO) {
        // This returns whether the User update is successful or not, and returns an error message if an error occurs.
        try {
            await this.userService.updateOneUser(user_id, UpdateUserDTO)
            return {
                success: true
            }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    
}

import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UserConnectionDto } from 'src/dto/user-connection.dto';
import { UserConnection } from '../entity/user-connection.entity';
import { UserConnectionService } from './user-connection.service';

@Controller('user-connection')
export class UserConnectionController {
  constructor(private readonly userConnectionService: UserConnectionService){}
 
    @Get('all')
    async getAll():Promise<UserConnection[]>{
        return await this.userConnectionService.findAll();
    }


    @Post('register')
    async registerUser(@Res() res, @Body() createUserConnectionDto: UserConnectionDto) {
        const newUserConnection = await this.userConnectionService.createOneUserConnection(createUserConnectionDto);
        return res.status(HttpStatus.OK).json({
            userConnection: newUserConnection,
            querySuccess: true,
        });
    }

    @Get(":id") 
    async getOne(@Param("id") UserConnection_id: string) {
        const result = await this.userConnectionService.getOne(UserConnection_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") UserConnection_id: string, @Body() updateUserConnectionDto: UserConnectionDto) {
        const result = await this.userConnectionService.updateOneUserConnection(UserConnection_id, updateUserConnectionDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") UserConnection_id: string) {
        const ret = await this.userConnectionService.deleteOneUserConnection(UserConnection_id);
        return ret;
    }
}

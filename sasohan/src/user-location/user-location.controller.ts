import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserLocationDto } from 'src/dto/user-location.dto';
import { UserLocation } from '../entity/user-location.entity';
import { UserLocationService } from './user-location.service';

@Controller('user-location')
export class UserLocationController {
  constructor(private readonly userLocationService: UserLocationService){}
 
    @Get('all')
    async getAll():Promise<UserLocation[]>{
        return await this.userLocationService.findAll();
    }

    @Post()
    async create(@Body() createUserLocationDto: UserLocationDto) {
        const result = await this.userLocationService.createOneUserLocation(createUserLocationDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") UserLocation_id: string) {
        const result = await this.userLocationService.getOne(UserLocation_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") UserLocation_id: string, @Body() updateUserLocationDto: UserLocationDto) {
        const result = await this.userLocationService.updateOneUserLocation(UserLocation_id, updateUserLocationDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") UserLocation_id: string) {
        const ret = await this.userLocationService.deleteOneUserLocation(UserLocation_id);
        return ret;
    }


}

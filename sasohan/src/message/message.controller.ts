import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MessageDto } from 'src/dto/message.dto';
import { Message } from '../entity/message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService){}
 
    @Get('all')
    async getAll():Promise<Message[]>{
        return await this.messageService.findAll();
    }
    @Post()
    async create(@Body() createMessageDto: MessageDto) {
        const result = await this.messageService.createOneMessage(createMessageDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") Message_id: string) {
        const result = await this.messageService.getOne(Message_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") Message_id: string, @Body() updateMessageDto: MessageDto) {
        const result = await this.messageService.updateOneMessage(Message_id, updateMessageDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") Message_id: string) {
        const ret = await this.messageService.deleteOneMessage(Message_id);
        return ret;
    }
}

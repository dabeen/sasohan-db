import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { MessageDto } from 'src/dto/message.dto';
import { PostsDto } from 'src/dto/posts.dto';
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
    async registerMessage(@Res() res, @Body() createMessageDto: MessageDto) {
        const newMessage = await this.messageService.createOneMessage(createMessageDto);
        return res.status(HttpStatus.OK).json({
            message: newMessage,
            querySuccess: true,
        });
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

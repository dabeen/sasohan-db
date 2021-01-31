import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ChatRoomDto } from 'src/dto/chat-room.dto';
import { ChatRoom } from '../entity/chat-room.entity';
import { ChatRoomService } from './chat-room.service';

@Controller('chat-room')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService){}
 
    @Get('all')
    async getAll():Promise<ChatRoom[]>{
        return await this.chatRoomService.findAll();
    }

    @Post()
    async create(@Body() createChatRoomDto: ChatRoomDto) {
        const result = await this.chatRoomService.createOneChatRoom(createChatRoomDto);
        return result;
    }

    @Get(":id") 
    async getOne(@Param("id") chatRoom_id: string) {
        const result = await this.chatRoomService.getOne(chatRoom_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") chatRoom_id: string, @Body() updateChatRoomDto: ChatRoomDto) {
        const result = await this.chatRoomService.updateOneChatRoom(chatRoom_id, updateChatRoomDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") chatRoom_id: string) {
        const ret = await this.chatRoomService.deleteOneChatRoom(chatRoom_id);
        return ret;
    }


}

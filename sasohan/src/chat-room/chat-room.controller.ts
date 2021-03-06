import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ChatRoomDTO } from 'src/DTO/chat-room.dto';
import { ChatRoom } from '../entity/chat-room.entity';
import { ChatRoomService } from './chat-room.service';

@Controller('chat-room')
export class ChatRoomController {
  constructor(private readonly chatRoomService: ChatRoomService){}
 
  @Get(":id")
    async getOneCategory(@Param("id") chat_room_id: string) {
        // this returns one category in sasohan database
        try {
            const result = await this.chatRoomService.getOne(chat_room_id);
            return {
                category: result,
                success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }

    }

    @Post("store")
    async registerOneCategory(@Body()createChatRoomDTO: ChatRoomDTO) {
        // This returns the success of creating (a) new category(s) and returns an error message if an error occurs.
        try {
            await this.chatRoomService.createOneChatRoom(createChatRoomDTO);
            return {success : true}
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    @Delete(":id")
    async deleteOneCategory(@Param("id") chat_room_id: string) {
        // This returns the success of the category deletion, and returns an error message if an error occurs.
        try {
            await this.chatRoomService.deleteOneChatRoom(chat_room_id);
            return { success : true }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

}

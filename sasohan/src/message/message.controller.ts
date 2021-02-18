import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { MessageDTO } from 'src/DTO/message.dto';
import { Message } from '../entity/message.entity';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService){}
 
  @Get('all')
  async getAllMessage() {
    try {
      const allMessage = await this.messageService.getAll();
      return {
          message: allMessage,
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
    async getOneMessage(@Param("id") message_id: string) {
        // this returns one Message in sasohan database
        try {
            const result = await this.messageService.getOne(message_id);
            return {
                Message: result,
                success: true
            }
        } catch (e) {
            return {
                success : false,
                error_msg: e
            }
        }

    }

    
    @Post("/store")
    async storeMessage(@Body()createMessageDTO: MessageDTO) {

        // This api receives a message delivered to "http://localhost:3000/store" and stores it in the database.
        // If successful, return {success: true}.
        // If failed, Returns an error message with {success: false}.        

        try {
            await this.messageService.createOneMessage(createMessageDTO);
            return {success : true}
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }


    // db에 없는 경우 error를 반환하지 않음 -> 수정해야함
    @Delete(":id")
    async deleteOneMessage(@Param("id") message_id: string) {
        // This returns the success of the Message deletion, and returns an error message if an error occurs.
        try {
            await this.messageService.deleteOneMessage(message_id);
            return { success : true }
        } catch (e) {
            return {
                success: false,
                error_msg: e
            }
        }
    }

    @Put(":id")
    async updateOneMessage(@Param("id") Message_id: string, @Body() UpdateMessageDTO: MessageDTO) {
        // This returns whether the Message update is successful or not, and returns an error message if an error occurs.
        try {
            await this.messageService.updateOneMessage(Message_id, UpdateMessageDTO)
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

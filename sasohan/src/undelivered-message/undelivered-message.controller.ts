import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { undeliveredMessageDTO } from 'src/dto/undeliveredMessage.dto';
import { UndeliveredMessageService } from './undelivered-message.service';


@Controller('undelivered-message')
export class UndeliveredMessageController {

  constructor(private readonly undeliveredMessageService : UndeliveredMessageService) {}
  
  @Get(':user_id')
  async getFailedMessage(@Param("user_id") user_id: string) {
    try {
      const message = await this.undeliveredMessageService.getAllFailedMessage(user_id);
      return {
        message: message,
        success: true
      }
    } catch (e) {
        return {
          success : false,
          error_msg: e
      }
    }
  }

  @Post("/storedFailed/:user_id")
  async storeFailedMessage(@Body() undeliveredMessageDTO : undeliveredMessageDTO) {
      try {
        await this.undeliveredMessageService.createOneMessage(undeliveredMessageDTO);
        return {success : true}
      } catch (e) {
          return {
              success: false,
              error_msg: e
          }
      }

  }




}

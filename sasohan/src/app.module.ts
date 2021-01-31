import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { UserLocationModule } from './user-location/user-location.module';
import { UserConnectionModule } from './user-connection/user-connection.module';
import { ResolverModule } from './resolver/resolver.module';
import { ReviewModule } from './review/review.module';
import { MessageModule } from './message/message.module';
import { ChatRoomModule } from './chat-room/chat-room.module';


@Module({
  imports: [TypeOrmModule.forRoot(), 
    CategoryModule, 
    UserModule, 
    PostModule, 
    UserLocationModule,
    UserConnectionModule,
    ResolverModule,
    ReviewModule,
    MessageModule,
    ChatRoomModule,
    ],
})
export class AppModule {}
 
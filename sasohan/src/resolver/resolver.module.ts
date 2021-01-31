import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resolver } from '../entity/resolver.entity';
import { ResolverController } from './resolver.controller';
import { ResolverService } from './resolver.service';

@Module({
  imports: [TypeOrmModule.forFeature([Resolver])],
  controllers: [ResolverController],
  providers: [ResolverService]
})
export class ResolverModule {}

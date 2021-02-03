import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { ResolverDto } from 'src/dto/resolver.dto';
import { Resolver } from '../entity/resolver.entity';
import { ResolverService } from './resolver.service';

@Controller('resolver')
export class ResolverController {
  constructor(private readonly resolverService: ResolverService){}
 
    @Get('all')
    async getAll():Promise<Resolver[]>{
        return await this.resolverService.findAll();
    }

    @Post()
    async create(@Body() createResolverDto: ResolverDto) {
        const result = await this.resolverService.createOneResolver(createResolverDto);
        return result;
    }

    @Post('register')
    async registerResolver(@Res() res, @Body() createResolverDto: ResolverDto) {
        const newResolver = await this.resolverService.createOneResolver(createResolverDto);
        return res.status(HttpStatus.OK).json({
            resolver: newResolver,
            querySuccess: true,
        });
    }

    @Get(":id") 
    async getOne(@Param("id") Resolver_id: string) {
        const result = await this.resolverService.getOne(Resolver_id);
        return result;
    }

    @Put(":id")
    async setOne(@Param("id") Resolver_id: string, @Body() updateResolverDto: ResolverDto) {
        const result = await this.resolverService.updateOneResolver(Resolver_id, updateResolverDto);
        return result; 
    }

    @Delete(":id")
    async deleteOne(@Param("id") Resolver_id: string) {
        const ret = await this.resolverService.deleteOneResolver(Resolver_id);
        return ret;
    }
}

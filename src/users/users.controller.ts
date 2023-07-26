import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params){
        console.log(params)
        return this.service.get(params.id)
    }

    @Get()
    getAll(){
        return this.service.getAll()
    }
    
    @Post()
    post(@Body() user: UserEntity){
        return this.service.create(user)
    }

    @Put()
    put(@Body() user: UserEntity){
        return this.service.update(user)
    }

    @Delete(':id')
    delete(@Param() params){
        return this.service.delete(params.id)
    }

}

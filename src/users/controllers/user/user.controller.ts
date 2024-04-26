import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateDto } from 'src/users/dtos/User.dto';
import { UserService } from 'src/users/provider/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}
    @Get()
    async getUsers(){
        const users=await this.userService.getUsers()
        return users
    }
    @Post()
    createUser(@Body() createUser:CreateDto){
        return this.userService.createUser(createUser)
    }
    @Put('/:id')
    updateUser(@Param('id', ParseIntPipe)id:number){
        return id
    }
}

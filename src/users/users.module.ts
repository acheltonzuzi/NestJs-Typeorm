import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { UserService } from './provider/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Typeorm/Entities/User';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService]
})
export class UsersModule {}

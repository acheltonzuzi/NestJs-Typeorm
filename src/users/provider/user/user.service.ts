import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Typeorm/Entities/User';
import { CreateDto } from 'src/users/dtos/User.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }
    getUsers() {
        return this.userRepository.find()
    }
    createUser(userPayload: CreateDto) {
        const newUser = this.userRepository.create({ ...userPayload, created_at: new Date() })
        return this.userRepository.save(newUser);


    }
}

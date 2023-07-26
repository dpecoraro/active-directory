import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

    async getAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async get(id: number): Promise<UserEntity | null> {
        return await this.userRepository.findOneBy({
            id
        });
    }

    async update(user: UserEntity): Promise<void> {
        this.userRepository.save(user)
    }

    async create(user: UserEntity): Promise<void> {
        this.userRepository.create(user)
    }

    async delete(user: UserEntity): Promise<boolean> {
        let entity = this.get(user.id)
        if(entity) {
            user.inativated_at = Date.now()
            user.status = 2
            this.userRepository.save(user)
            return true;
        }
        return false;
    }
}

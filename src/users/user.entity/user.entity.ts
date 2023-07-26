import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( {length: 255} )
    name: string;

   @CreateDateColumn()
    created_at: string;
    
    @Column()
    inativated_at: number;
    
    @Column()
    status: number;
    
    @Column()
    cpf: string;
}

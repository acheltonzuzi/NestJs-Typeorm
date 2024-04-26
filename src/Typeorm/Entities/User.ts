import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn({type:'bigint'})
    id:number;

    @Column({
        unique:true,
        nullable:false
    })
    username:string
    
    @Column({})
    password:string

    @Column({})
    created_at:Date

    @Column({nullable:true})
    authStrategy:string

}
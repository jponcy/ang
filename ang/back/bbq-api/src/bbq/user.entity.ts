import { Entity, PrimaryColumn, Generated, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({name: 'sys_user'})
export class User {
    @PrimaryColumn()
    @Generated()
    id: number;

    @Column({ unique: true })
    @IsNotEmpty()
    username: string;

    @Column()
    @IsNotEmpty()
    address: string;
}

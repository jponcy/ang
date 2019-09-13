import { Entity, PrimaryColumn, Generated, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity({name: 'sys_user'})
export class User {
    @PrimaryColumn()
    @Generated()
    @ApiModelProperty({ readOnly: true })
    id: number;

    @Column({ unique: true })
    @IsNotEmpty()
    @ApiModelProperty()
    username: string;

    @Column()
    @IsNotEmpty()
    @ApiModelProperty()
    address: string;
}

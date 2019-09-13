import { Entity, Column, Generated, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsDate, IsDateString } from 'class-validator';
import { User } from './user.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Barbecue {
  @PrimaryColumn()
  @Generated()
  @Exclude()
  @ApiModelProperty({ readOnly: true })
  id: number;

  @Column()
  @IsNotEmpty()
  @ApiModelProperty()
  label: string;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  @ApiModelProperty({ required: false })
  description: string;

  @Column()
  @IsNotEmpty()
  @IsDateString()
  @ApiModelProperty()
  startAt: Date;

  @Column({ nullable: true })
  @IsOptional()
  @ApiModelProperty()
  endAt: Date;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  @ApiModelProperty()
  price: number;

  // @Column()
  // users: User[];

  @Column()
  @IsNotEmpty()
  @ApiModelProperty()
  address: string;

  @ManyToOne((type) => User)
  @IsNotEmpty()
  @ApiModelProperty({ type: 'number', minimum: 1 })
  owner: User;

  @ManyToMany((type) => User)
  @IsOptional()
  @ApiModelProperty({ type: 'number', isArray: true })
  users: User[];
}

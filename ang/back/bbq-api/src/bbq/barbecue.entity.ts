import { Entity, Column, Generated, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsDate, IsDateString } from 'class-validator';
import { User } from './user.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Barbecue {
  @PrimaryColumn()
  @Generated()
  @ApiModelProperty({ readOnly: true })
  id: number;

  @Column()
  @IsNotEmpty()
  @ApiModelProperty()
  @Expose()
  label: string;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  @ApiModelProperty({ required: false })
  description: string;

  @Column()
  @IsNotEmpty()
  @IsDateString()
  @ApiModelProperty({ type: 'string', format: 'ISO' })
  startAt: Date;

  @Column({ nullable: true })
  @IsOptional()
  @ApiModelProperty({ type: 'string', format: 'ISO', required: false })
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
  // @ApiModelProperty({ type: 'number', minimum: 1 })
  @ApiModelProperty()
  // @Transform(owner => owner.id)
  owner: User;

  @ManyToMany((type) => User)
  @IsOptional()
  @Exclude({ toClassOnly: true })
  @ApiModelProperty({ type: 'number', isArray: true, uniqueItems: true })
  users: User[];


  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}

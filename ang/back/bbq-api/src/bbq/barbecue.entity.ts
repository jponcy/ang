import { Entity, Column, Generated, PrimaryColumn, ManyToOne } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsDate, IsDateString } from 'class-validator';
import { User } from './user.entity';

@Entity()
export class Barbecue {
  @PrimaryColumn()
  @Generated()
  @Exclude()
  id: number;

  @Column()
  @IsNotEmpty()
  label: string;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  description: string;

  @Column()
  @IsNotEmpty()
  @IsDateString()
  startAt: Date;

  @Column({ nullable: true })
  @IsOptional()
  endAt: Date;

  @Column({ type: 'float', nullable: true })
  @IsOptional()
  price: number;

  // @Column()
  // users: User[];

  // @ApiModelProperty({type: User, isArray: false})
  @ManyToOne(type => User, user => user.id)
  owner: User;

  @Column()
  @IsNotEmpty()
  address: string;
}

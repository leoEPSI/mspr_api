import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id_message: number;

  @Column({ length: 255 })
  content_message: string;

  @Column({length: 255})
  date_message: string;

  @ManyToOne(() => User)
  id_photo_m: number;
}

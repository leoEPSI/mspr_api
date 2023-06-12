import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  contentMessage: string;

  @Column()
  dateMessage: Date;

  @ManyToOne(() => User)
  user: User;
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Plant } from './plant.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id_comment: number;

  @Column({ length: 255 })
  content_comment: string;

  @Column({ length: 255 })
  date_comment: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Plant)
  plant: Plant;
}

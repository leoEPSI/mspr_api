import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Plant } from './plant.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  contentComment: string;

  @Column()
  dateComment: Date;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Plant)
  plant: Plant;
}

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PhotoMessage {
  @PrimaryGeneratedColumn()
  id_photo_m: number;

  @Column({ length: 255 })
  image_m: string;
}

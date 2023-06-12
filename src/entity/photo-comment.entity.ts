import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PhotoComment {
  @PrimaryGeneratedColumn()
  id_photo_c: number;

  @Column({ length: 255 })
  image_c: string;
}

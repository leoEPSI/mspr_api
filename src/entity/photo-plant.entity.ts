import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PhotoPlant {
  @PrimaryGeneratedColumn()
  id_photo_p: number;

  @Column({ length: 255 })
  image_p: string;
}

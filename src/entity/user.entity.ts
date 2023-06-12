import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 100 })
  email_address: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 200 })
  address: string;

  @Column({ length: 50 })
  permission: string;
}

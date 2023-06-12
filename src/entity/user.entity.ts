import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 100 })
  emailAddress: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 200 })
  address: string;

  @Column({ length: 50 })
  permission: string;
}

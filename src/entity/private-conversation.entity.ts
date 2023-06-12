import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class PrivateConversation {
  @PrimaryColumn()
  id_user: number;

  @Column()
  destinataireId: number;

  @Column()
  messageId: number;
}

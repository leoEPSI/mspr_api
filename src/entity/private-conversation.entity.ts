import { Entity, Column, PrimaryGeneratedColumn  } from 'typeorm';

@Entity()
export class PrivateConversation {
  @PrimaryGeneratedColumn()
  id_private_conversation: number;

  @Column()
  id_user: number;

  @Column()
  destinataireId: number;

  @Column()
  messageId: number;
}

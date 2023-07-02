import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { PhotoMessage } from './photo-message.entity';
import { PrivateConversation } from './private-conversation.entity';
import { User } from './user.entity';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id_message: number;

  @Column({ length: 255 })
  content_message: string;

  @Column({length: 255})
  date_message: string;

  @ManyToOne(() => User)
  id_users: number;
  
  @ManyToOne(() => PhotoMessage)
  id_photo_m: number;

  @ManyToOne(() => PrivateConversation)
  id_private_conversation: number;
}

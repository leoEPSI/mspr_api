import { User } from "./entity/user.entity";
import { Plant } from "./entity/plant.entity";
import { Message } from "./entity/message.entity";
import { Comment } from "./entity/comment.entity";
import { PhotoCommentEntity } from "./entity/photo-comment.entity";
import { PhotoMessageEntity } from "./entity/photo-message.entity";
import { PhotoPlantEntity } from "./entity/photo-plant.entity";
import { PrivateConversationEntity } from "./entity/private-conversation.entity";

const entities = [User, Plant, Message, Comment, PhotoCommentEntity, PhotoMessageEntity, PhotoPlantEntity, PrivateConversationEntity ];

export {User};
export default entities;
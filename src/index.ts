import { User } from "./entity/user.entity";
import { Plant } from "./entity/plant.entity";
import { Message } from "./entity/message.entity";
import { Comment } from "./entity/comment.entity";
import { PhotoComment } from "./entity/photo-comment.entity";
import { PhotoMessage } from "./entity/photo-message.entity";
import { PhotoPlant } from "./entity/photo-plant.entity";
import { PrivateConversation } from "./entity/private-conversation.entity";

const entities = [User, Plant, Message, Comment, PhotoComment, PhotoMessage, PhotoPlant, PrivateConversation ];

export {User};
export default entities;
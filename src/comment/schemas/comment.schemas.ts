
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop()
    content: string;

    @Prop()
    author: string;

    @Prop()
    timestamp: string;

    @Prop()
    postid: string;
}


export const CommentSchema = SchemaFactory.createForClass(Comment);

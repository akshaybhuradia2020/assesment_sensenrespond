
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
    @Prop({
        required:true
    })
    content: string;

    @Prop({
        required: true
    })
    author: string;

    @Prop({
        required: true
    })
    timestamp: string;

    @Prop({
        required: true
    })
    postid: string;
}


export const CommentSchema = SchemaFactory.createForClass(Comment);

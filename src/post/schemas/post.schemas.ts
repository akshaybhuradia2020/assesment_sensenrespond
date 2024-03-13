import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop()
    title: string;

    @Prop()
    content: string;

    @Prop()
    author: string;

    @Prop()
    timestamp: Date;
}


export const PostSchema = SchemaFactory.createForClass(Post);

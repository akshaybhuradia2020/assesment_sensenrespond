import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({
        minlength: 4,
        required: true
    })
    username: string;

    @Prop({
        minlength: 4,
        required: true
    })
    password: string;

    @Prop({
        minlength: 4,
        required: true
    })
    email: string;
}


export const UserSchema = SchemaFactory.createForClass(User);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop()
  userName: string;
  @Prop({ unique: true })
  email: string;
  @Prop()
  password: string;
  @Prop({
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  })
  avatar: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

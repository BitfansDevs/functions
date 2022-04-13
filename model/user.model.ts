import { model, Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
    uid: String;
    name: string;
    email: String;
    publicKey: String;
    role: String;
}

const UsereSchema: Schema = new Schema({
    uid: { type: String, required: true },
    name: { type: String },
    email: { type: String },
    publicKey: { type: String },
    role: { type: String }
});

export const UserModel: Model<IUser> = model<IUser>('user', UsereSchema);
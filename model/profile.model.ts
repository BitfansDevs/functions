import { model, Schema, Model, Document } from 'mongoose';

export interface IProfile extends Document {
    name: string;
    email: String;
    publicKey: String;
}

const ProfileSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    publicKey: { type: String, required: true }
});

export const ProfileModel: Model<IProfile> = model<IProfile>('profile', ProfileSchema);
import { model, Schema, Model, Document } from 'mongoose';

export interface IEventDetails extends Document {
    eventId: String;
    description: String;
    address: String;
    price: Number;
    currency: String;
    nftContractAddress: String;
    imageUrl: String;
    termsAndConditions: String;
    openDoorsTime: String;
    startDateTime: String;
}

const EventDetailsSchema: Schema = new Schema({
    eventId: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    nftContractAddress: { type: String, required: true },
    imageUrl: { type: String, required: true },
    termsAndConditions: { type: String, required: true },
    openDoorsTime: { type: String, required: true },
    startDateTime: { type: String, required: true }
});

export const EventDetailsModel: Model<IEventDetails> = model<IEventDetails>('eventDetail', EventDetailsSchema);
import { model, Schema, Model, Document } from 'mongoose';

export interface IEvent extends Document {
    imageUrl: string;
    location: String;
    tittle: String;
    description: String;
    dateAndTime: Date;
    price: Number;
    category: String;
}

const EventSchema: Schema = new Schema({
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    tittle: { type: String, required: true },
    description: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});

export const EventsModel: Model<IEvent> = model<IEvent>('event', EventSchema);
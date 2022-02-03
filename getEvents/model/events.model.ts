import { model, Schema, Model, Document } from 'mongoose';

export interface IEvent extends Document {
    eventId: String;
    location: String;
    tittle: String;
    description: String;
    price: Number;
    category: String;
}

const EventSchema: Schema = new Schema({
    eventId: { type: String, required: true },
    location: { type: String, required: true },
    tittle: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});

export const EventsModel: Model<IEvent> = model<IEvent>('event', EventSchema);
import { model, Schema, Model, Document, ObjectId } from 'mongoose';
const mongoose = require("mongoose");

export interface IEvent extends Document {
    imageUrl: string;
    location: String;
    title: String;
    description: String;
    categoryId: ObjectId;
    priority: Number;
}

const EventSchema: Schema = new Schema({
    imageUrl: { type: String, required: true },
    location: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true
    },
    priority: { type: Number, required: true }
});

export const EventsModel: Model<IEvent> = model<IEvent>('event', EventSchema);
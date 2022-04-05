const mongoose = require("mongoose");
import { model, Schema, Model, Document, ObjectId } from 'mongoose';

export interface ITicket extends Document {
    type: String;
    eventId: ObjectId;
    price: Number;
    currency: String;
    limit: Number;
    limitByPerson: Number;
    available: Number;
}

const TicketSchema: Schema = new Schema({
    type: { type: String, required: true },
    eventId: { type: mongoose.Schema.Types.ObjectId, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    limit: { type: Number, required: true },
    limitByPerson: { type: Number, required: true },
    available: { type: Number, required: true }
});

export const TicketModel: Model<ITicket> = model<ITicket>('ticket', TicketSchema);
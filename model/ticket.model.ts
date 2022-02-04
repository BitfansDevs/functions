import { model, Schema, Model, Document } from 'mongoose';

export interface ITicket extends Document {
    uid: String;
    eventId: string;
    quantity: number;
}

const TicketSchema: Schema = new Schema({
    uid: { type: String, required: true },
    eventId: { type: String, required: true },
    quantity: { type: Number, required: true }
});

export const TicketModel: Model<ITicket> = model<ITicket>('ticket', TicketSchema);
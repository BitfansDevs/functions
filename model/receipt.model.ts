const mongoose = require("mongoose");
import { model, Schema, Model, Document, ObjectId } from 'mongoose';

export interface IReceipt extends Document {
    eventId: ObjectId;
    userId: ObjectId;
    ticketId: ObjectId;
    quantity: Number;
    date: Date;
    status: String;
}

const ReceiptSchema: Schema = new Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ticket",
        required: true
    },
    quantity: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now },
    status: { type: String, required: true }
});

export const ReceiptModel: Model<IReceipt> = model<IReceipt>('receipt', ReceiptSchema);
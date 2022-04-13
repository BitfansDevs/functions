const mongoose = require("mongoose");
import { model, Schema, Model, Document, ObjectId } from 'mongoose';

export interface IReceipt extends Document {
    eventId: ObjectId;
    uid: String;
    ticketId: ObjectId;
    paymentId: ObjectId;
    date: Date;
    status: String;
}

const ReceiptSchema: Schema = new Schema({
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "event",
        required: true
    },
    uid: { type: String, required: true },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ticket",
        required: true
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payment",
        required: true
    },
    date: { type: Date, required: true, default: Date.now },
    status: { type: String, required: true }
});

export const ReceiptModel: Model<IReceipt> = model<IReceipt>('receipt', ReceiptSchema);
const mongoose = require("mongoose");
import { model, Schema, Model, Document, ObjectId } from 'mongoose';

export interface IPayment extends Document {
    eventId: ObjectId;
    type: String;
    number: String;
    description: String;
    nameOwner: String;
}

const PaymentSchema: Schema = new Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, required: true },
    type: { type: String, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
    nameOwner: { type: String, required: true }
});

export const PaymentModel: Model<IPayment> = model<IPayment>('payment', PaymentSchema);
import { model, Schema, Model, Document, ObjectId } from 'mongoose';
const mongoose = require("mongoose");

export interface IEventDetails extends Document {
    eventId: ObjectId;
    description: String;
    address: String;
    nftContractAddress: String;
    nftImageUrl: String;
    imageUrl: [String];
    tickets: [ObjectId];
    limitByPerson: Number;
    payment: [ObjectId];
    socialNetworks: [Object];
    termsAndConditions: String;
    openDoorsTime: String;
    startDateTime: String;
    email: String;
    latitude: Number;
    longitude: Number;
    place: String;
    city: String;
    country: String;
    status: String;
}

const EventDetailsSchema: Schema = new Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    nftContractAddress: { type: String, required: true },
    nftImageUrl: { type: String, required: true },
    imageUrl: { type: [String], required: true },
    tickets: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ticket'
        }], required: true
    },
    payments: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'payment'
        }], required: true
    },
    limitByPerson: { type: Number, required: true },
    socialNetworks: { type: [Object], required: true },
    termsAndConditions: { type: String, required: true },
    openDoorsTime: { type: String, required: true },
    startDateTime: { type: String, required: true },
    email: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    place: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    status: { type: String, required: true }
});

export const EventDetailsModel: Model<IEventDetails> = model<IEventDetails>('eventDetail', EventDetailsSchema);
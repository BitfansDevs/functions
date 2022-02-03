import { connect, disconnect } from "../mongodb/config/db.config";
import { EventDetailsModel } from '../model';

export class EventDetailsRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createEventDetails(event: any): Promise<any> {
        return await EventDetailsModel.create(event);
    }

    async findEventDetailsByEventId(eventId: string): Promise<any> {
        return await EventDetailsModel.find({ eventId: eventId });
    }

    async listEventDetails(): Promise<any> {
        return await EventDetailsModel.find({});
    }

}
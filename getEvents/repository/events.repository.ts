import { connect, disconnect } from "../../mongodb/config/db.config";
import { EventsModel } from '../model';

export class EventsRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createEvents(event: any): Promise<any> {
        return await EventsModel.create(event);
    }

    async listEvents(): Promise<any> {
        return await EventsModel.find({});
    }

}
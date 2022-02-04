import { connect, disconnect } from "../mongodb/config/db.config";
import { TicketModel } from '../model';

export class TicketRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createTicket(ticket: any): Promise<any> {
        return await TicketModel.create(ticket);
    }

    async findTicketByUserId(uid: string): Promise<any> {
        return await TicketModel.find({ uid: uid });
    }

}
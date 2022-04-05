import { connect, disconnect } from "../mongodb/config/db.config";
import { ReceiptModel } from '../model';

export class ReceiptRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createReceipt(receipt: any): Promise<any> {
        return await ReceiptModel.create(receipt);
    }

    async findReceiptByUserIdAndStatus(uid: string, status: string): Promise<any> {
        return await ReceiptModel.find({ uid: uid, status: status }).populate({ path: 'eventId' }).populate({ path: 'ticketId', select: 'type price currency' });
    }

}
import { ReceiptRepository } from '../repository';

export class ReceiptService {

    receiptRepository: ReceiptRepository;

    constructor() {
        this.receiptRepository = new ReceiptRepository();
    }

    public async createReceipt(receipt: any) {
        return await this.receiptRepository.createReceipt(receipt);
    }

    public async findReceiptByUserIdAndStatus(uid : string, status: string) {
        return await this.receiptRepository.findReceiptByUserIdAndStatus(uid, status);
    }

}
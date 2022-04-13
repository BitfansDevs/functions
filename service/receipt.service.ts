import { ReceiptRepository } from '../repository';

export class ReceiptService {

    receiptRepository: ReceiptRepository;

    constructor() {
        this.receiptRepository = new ReceiptRepository();
    }

    public async createReceipt(receipts: any) {
        return await this.receiptRepository.createReceipt(receipts);
    }

    public async findReceiptById(id: string) {
        return await this.receiptRepository.findReceiptById(id);
    }
    
    public async findReceiptByUserIdAndStatus(uid: string, status: string) {
        return await this.receiptRepository.findReceiptByUserIdAndStatus(uid, status);
    }

    public async updateStatusReceiptById(id: string, status: string) {
        return await this.receiptRepository.updateStatusReceiptById(id, status);
    }

}
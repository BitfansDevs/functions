import { ReceiptService } from '../service';

export class ReceiptController {

    private receiptService: ReceiptService;

    constructor() {
        this.receiptService = new ReceiptService();
    }

    public async createReceipt(receipts: any) {
        return await this.receiptService.createReceipt(receipts);
    }

    public async findReceiptById(id: string) {
        return await this.receiptService.findReceiptById(id);
    }

    public async findReceiptByUserIdAndStatus(uid: string, status: string) {
        return await this.receiptService.findReceiptByUserIdAndStatus(uid, status);
    }
}
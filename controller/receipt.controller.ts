import { ReceiptService } from '../service';

export class ReceiptController {

    private receiptService: ReceiptService;

    constructor() {
        this.receiptService = new ReceiptService();
    }

    public async createReceipt(receipt: any) {
        return await this.receiptService.createReceipt(receipt);
    }

    public async findReceiptByUserIdAndStatus(uid: string, status: string) {
        return await this.receiptService.findReceiptByUserIdAndStatus(uid, status);
    }
}
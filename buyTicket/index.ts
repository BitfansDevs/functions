import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { ReceiptController } from "../controller";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const receiptController = new ReceiptController();
    let result: any;
    const HEADERS = { 'Content-Type': 'application/json' }
    try {

        let tickets = req.body.tickets;
        let receipts = [];
        let { eventId, uid, paymentId, status } = req.body;
        
        tickets.forEach(ticket => {
            for (let i = 0; i < ticket.quantity; i++) {
                let receipt = {
                    eventId,
                    uid,
                    paymentId,
                    date: Date.now(),
                    ticketId: ticket.ticketId,
                    status
                }
                receipts.push(receipt);
            }
        });

        result = receiptController.createReceipt(receipts);
        result.statusCode = 200;

        context.res = {
            body: result,
            headers: HEADERS
        };

    } catch (ex) {
        console.log("Exception occurred while logging in --> ", ex);
        context.res = {
            status: 500,
            body: { message: ex.message },
            headers: HEADERS
        };
    }

};

export default httpTrigger;
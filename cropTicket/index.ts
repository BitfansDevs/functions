import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ReceiptController } from "../controller";
import { ProfileController } from '../controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const receiptController = new ReceiptController();
    const profileController = new ProfileController();
    
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {

        let { uid, id } = req.params;

        let user = await profileController.findProfileAdminById(uid);

        if(user.length > 0) {
            result = await receiptController.updateStatusReceiptById(id, req.body.status)
            result.statusCode = 200;
            
            context.res = {
                body: result,
                headers: HEADERS
            };
        } else {
            context.res = {
                body: { message: "ROLE ISN'T ADMIN"},
                headers: HEADERS
            };
        }
        
    } catch(ex) {
        console.log("Exception occurred while logging in --> ", ex);
        context.res = {
            status: 500,
            body: {message: ex.message},
            headers: HEADERS
        };
    }
};

export default httpTrigger;
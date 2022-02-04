import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { SingupController } from '../controller';
import { USER_EXISTS } from '../util/Error';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const singupController = new SingupController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await singupController.findUserById(req.body.uid);
        if(result != null) {
            context.res = {
                status: 400,
                body: {message: USER_EXISTS},
                headers: HEADERS
            };
            return;
        }

        result = await singupController.createUser(req.body);
        result.statusCode = 200;
        
        context.res = {
            body: result,
            headers: HEADERS
        };
        
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
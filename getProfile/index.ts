import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { ProfileController } from '../controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const profileController = new ProfileController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await profileController.findProfileById(req.params.profileId);
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
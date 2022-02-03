import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EventsController } from './controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const eventsController = new EventsController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await eventsController.listEvents()
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
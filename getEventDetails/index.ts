import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EventDetailsController } from './controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const eventDetailsController = new EventDetailsController();
    let result: any;
    const HEADERS = {'Content-Type': 'application/json'}
    try {
        result = await eventDetailsController.findEventDetailsByEventId(req.params.eventId);
        console.log("eventId: ", req.params.eventId);
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
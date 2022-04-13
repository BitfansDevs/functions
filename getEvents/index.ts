import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { EventsController } from '../controller';
import { ProfileController } from '../controller';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    const eventsController = new EventsController();
    const profileController = new ProfileController();
    let result: any;
    const HEADERS = { 'Content-Type': 'application/json' }
    try {
        let { uid } = req.query;
        context.log(req.query)
        if (uid) {
            context.log("dentro")
            let user = await profileController.findProfileAdminById(uid);
            if (user.length > 0 && user[0].role == "ADMIN") {
                result = await eventsController.listEventsByUserAdmin(uid, req.query)
                result.statusCode = 200;
                context.res = {
                    body: result,
                    headers: HEADERS
                };
            }

        } else {
            result = await eventsController.listEvents(req.query)
            result.statusCode = 200;
            context.res = {
                body: result,
                headers: HEADERS
            };
        }

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
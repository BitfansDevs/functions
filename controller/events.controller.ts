import { EventsService } from '../service';

export class EventsController {

    private eventsService: EventsService;

    constructor() {
        this.eventsService = new EventsService();
    }

    public async listEvents(query: any) {
        return await this.eventsService.listEvents(query);
    }

    public async createEvent(task: any) {
        return await this.eventsService.createEvent(task);
    }
}
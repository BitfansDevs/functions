import { EventsService } from '../service';

export class EventsController {

    private eventsService: EventsService;

    constructor() {
        this.eventsService = new EventsService();
    }

    public async listEvents() {
        return await this.eventsService.listEvents();
    }

    public async createEvent(task: any) {
        return await this.eventsService.createEvent(task);
    }
}
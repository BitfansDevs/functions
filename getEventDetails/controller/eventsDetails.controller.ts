import { EventDetailsService } from '../service';

export class EventDetailsController {

    private eventDetailsService: EventDetailsService;

    constructor() {
        this.eventDetailsService = new EventDetailsService();
    }

    public async listEventDetails() {
        return await this.eventDetailsService.listEventDetails();
    }

    public async findEventDetailsByEventId(eventId: string) {
        return await this.eventDetailsService.findEventDetailsByEventId(eventId);
    }

    public async createEventDetails(task: any) {
        return await this.eventDetailsService.createEventDetails(task);
    }
}
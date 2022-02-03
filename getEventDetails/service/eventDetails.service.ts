import { EventDetailsRepository } from '../repository';

export class EventDetailsService {

    eventDetailsRepository: EventDetailsRepository;

    constructor() {
        this.eventDetailsRepository = new EventDetailsRepository();
    }

    public async createEventDetails(event: any) {
        return await this.eventDetailsRepository.createEventDetails(event);
    }

    public async findEventDetailsByEventId(eventId: string) {
        return await this.eventDetailsRepository.findEventDetailsByEventId(eventId);
    }

    public async listEventDetails() {
        return await this.eventDetailsRepository.listEventDetails();
    }

}
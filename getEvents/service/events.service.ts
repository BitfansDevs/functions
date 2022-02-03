import { EventsRepository } from '../repository';

export class EventsService {

    eventsRepository: EventsRepository;

    constructor() {
        this.eventsRepository = new EventsRepository();
    }

    public async createEvent(event: any) {
        return await this.eventsRepository.createEvents(event);
    }

    public async listEvents() {
        return await this.eventsRepository.listEvents();
    }

}
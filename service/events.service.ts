import { EventsRepository, CategoryRepository } from '../repository';

export class EventsService {

    eventsRepository: EventsRepository;
    categoryRepository: CategoryRepository;

    constructor() {
        this.eventsRepository = new EventsRepository();
        this.categoryRepository = new CategoryRepository();
    }

    public async createEvent(event: any) {
        return await this.eventsRepository.createEvents(event);
    }

    public async listEvents(query: any) {
        let { category, title } = query;
        if (!category)
            category = "";
        if (!title)
            title = "";

        return await this.eventsRepository.listEventsByCategoryAndTitle(category, title);
    }

}
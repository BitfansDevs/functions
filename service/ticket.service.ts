import { TicketRepository } from '../repository';

export class TicketService {

    ticketRepository: TicketRepository;

    constructor() {
        this.ticketRepository = new TicketRepository();
    }

    public async createTicket(ticket: any) {
        return await this.ticketRepository.createTicket(ticket);
    }

    public async findTicketByUserId(uid : string) {
        return await this.ticketRepository.findTicketByUserId(uid);
    }

}
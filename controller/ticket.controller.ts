import { TicketService } from '../service';

export class TicketController {

    private ticketService: TicketService;

    constructor() {
        this.ticketService = new TicketService();
    }

    public async createTicket(ticket: any) {
        return await this.ticketService.createTicket(ticket);
    }

    public async findTicketByUserId(uid: string) {
        return await this.ticketService.findTicketByUserId(uid);
    }
}
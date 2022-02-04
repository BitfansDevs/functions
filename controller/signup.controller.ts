import { SingupService } from '../service';

export class SingupController {

    private singupService: SingupService;

    constructor() {
        this.singupService = new SingupService();
    }

    public async createUser(user: any) {
        return await this.singupService.createUser(user);
    }

    public async findUserById(uid: string) {
        return await this.singupService.findUserById(uid);
    }
}
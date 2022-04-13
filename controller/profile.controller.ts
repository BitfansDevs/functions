import { ProfileService } from '../service';

export class ProfileController {

    private profileService: ProfileService;

    constructor() {
        this.profileService = new ProfileService();
    }

    public async findProfileById(uid: string) {
        return await this.profileService.findProfileById(uid);
    }

    public async findProfileAdminById(uid: string) {
        return await this.profileService.findProfileAdminById(uid);
    }
}
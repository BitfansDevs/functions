import { ProfileService } from '../service';

export class ProfileController {

    private profileService: ProfileService;

    constructor() {
        this.profileService = new ProfileService();
    }

    public async findProfileById(profileId: string) {
        return await this.profileService.findProfileById(profileId);
    }

    public async createProfile(profile: any) {
        return await this.profileService.createProfile(profile);
    }
}
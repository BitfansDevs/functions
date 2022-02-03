import { ProfileRepository } from '../repository';

export class ProfileService {

    profileRepository: ProfileRepository;

    constructor() {
        this.profileRepository = new ProfileRepository();
    }

    public async createProfile(profile: any) {
        return await this.profileRepository.createProfile(profile);
    }

    public async findProfileById(profileId : string) {
        return await this.profileRepository.findProfileById(profileId);
    }

}
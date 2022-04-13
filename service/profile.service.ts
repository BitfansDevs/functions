import { UserRepository } from '../repository';

export class ProfileService {

    userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async findProfileById(uid : string) {
        return await this.userRepository.findUserById(uid);
    }

    public async findProfileAdminById(uid : string) {
        return await this.userRepository.findProfileAdminById(uid);
    }

}
import { UserRepository } from '../repository';

export class SingupService {

    userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async createUser(user: any) {
        return await this.userRepository.createUser(user);
    }

    public async findUserById(uid : string) {
        return await this.userRepository.findUserById(uid);
    }

}
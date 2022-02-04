import { connect, disconnect } from "../mongodb/config/db.config";
import { UserModel } from '../model';

export class UserRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createUser(user: any): Promise<any> {
        return await UserModel.create(user);
    }

    async findUserById(uid: string): Promise<any> {
        return await UserModel.find({ uid: uid });
    }

}
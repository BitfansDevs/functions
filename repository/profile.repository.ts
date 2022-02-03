import { connect, disconnect } from "../mongodb/config/db.config";
import { ProfileModel } from '../model';

export class ProfileRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createProfile(event: any): Promise<any> {
        return await ProfileModel.create(event);
    }

    async findProfileById(profileId: string): Promise<any> {
        return await ProfileModel.findById(profileId);
    }

}
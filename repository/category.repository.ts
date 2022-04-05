import { connect, disconnect } from "../mongodb/config/db.config";
import { CategoryModel } from '../model';

export class CategoryRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async getAllCategories(): Promise<any> {
        return await CategoryModel.find();
    }

}
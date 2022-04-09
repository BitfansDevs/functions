import { connect, disconnect } from "../mongodb/config/db.config";
import { EventsModel } from '../model';

export class EventsRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createEvents(event: any): Promise<any> {
        return await EventsModel.create(event);
    }

    async listEventsByCategoryAndTitle(category: string, title: string): Promise<any> {

        return await EventsModel.aggregate([
            {
                $lookup: {
                    from: "categories",
                    localField: "categoryId",
                    foreignField: "_id",
                    as: "category"
                }
            },
            {
                $project: {
                    "categoryId": 0
                }
            },
            {
                $match: {
                    $and: [
                        {
                            "category.category": {
                                $regex: category,
                                $options: 'i'
                            }
                        },
                        {
                            "title": {
                                $regex: title,
                                $options: 'i'
                            }
                        }
                    ]
                }
            },
            {
                $sort: {
                    "priority": 1
                }
            }
        ]);
    }

}
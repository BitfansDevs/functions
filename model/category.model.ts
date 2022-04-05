const mongoose = require("mongoose");
import { model, Schema, Model, Document, ObjectId } from 'mongoose';

export interface ICategory extends Document {
    category: String;
}

const CategorySchema: Schema = new Schema({
    category: { type: String, required: true }
});

export const CategoryModel: Model<ICategory> = model<ICategory>('category', CategorySchema);
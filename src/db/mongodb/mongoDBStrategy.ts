import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { ContextStrategy as Context } from '../base/contextStrategy';

export class MongoDBStrategy extends Context {
  public connection: any;
  public model: any;
  constructor(connection: any, model: any) {
    super(connection);

    this.model = model;
    this.connection = connection;
  }

  public async create(item: any = {}) {
    return this.model.create(item);
  }

  public async read(item: any = {}) {
    return this.model.find(item);
  }

  public async update(id: number, item: any = {}) {
    return this.model.updateOne({ _id: id }, { $set: item });
  }

  public async delete(id: number) {
    return this.model.deleteOne({ _id: id });
  }

  public async isConnected() {
    const state: number = this.connection.readyState;
    if (state === 1) return state;
    if (state !== 2) return state;
    await new Promise(resolve => setTimeout(resolve, 1000));
    return this.connection.readyState;
  }
}

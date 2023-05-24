import * as mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';
// import { nanoid } from 'nanoid'

export const TenantSchema = new mongoose.Schema({
  _id: {
    type: String,
    index: true,
    unique: true,
    default: () => uuid()
  },
  tenant: String,
  status: {
    type: String,
    default: 'Active'
  },
  urls: {
    cmsapi: String,
    cdnapi: String,
    cdnurl: String,
    front: String
  }
}, {
  versionKey: false
});
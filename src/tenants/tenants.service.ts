import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tenant } from './interfaces/tenant.interface'

@Injectable()
export class TenantsService {
  constructor(
    @InjectModel('Tenant') private readonly tenantModel: Model<Tenant>
  ) { }

  // async findAll(): Promise<Tenant[]> {
  //   return await this.tenantModel.find();
  // }

  // async findOne(id: string): Promise<Tenant> {
  //   console.log('findOne:', id);
  //   return await this.tenantModel.findOne({ id: id });
  // }

  async findTenant(tenant: string): Promise<Tenant> {
    const resp = await this.tenantModel.findOne({ tenant: tenant });
    console.log('Tenant:', resp);
    return (resp.status === 'Active') ? resp : null;
  }

  // async create(tenant: Tenant): Promise<Tenant> {
  //   const newTenant = new this.tenantModel(tenant);
  //   console.log('newTenant==========================');
  //   console.log(newTenant);
  //   return await newTenant.save();
  // }

  // async update(id: string, tenant: Tenant): Promise<Tenant> {
  //   return await this.tenantModel.findByIdAndUpdate(tenant._id, tenant, { new: true, useFindAndModify: false });
  // }

  // async delete(id: string): Promise<Tenant> {
  //   return await this.tenantModel.findByIdAndRemove(id);
  // }

}
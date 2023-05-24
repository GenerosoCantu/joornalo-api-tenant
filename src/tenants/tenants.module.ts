import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenantsController } from './tenants.controller';
import { TenantsService } from './tenants.service';
import { TenantSchema } from './schemas/tenant.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Tenant', schema: TenantSchema }])],
  controllers: [TenantsController],
  providers: [TenantsService],
  exports: [TenantsService],
})
export class TenantsModule { }
import { Controller, Request, Get, Post, Put, Patch, Delete, Body, Param, Header, UseGuards, UseInterceptors } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { TenantDto } from './dto/tenant.dto';
import { TenantsService } from './tenants.service';
import { Tenant } from './interfaces/tenant.interface';

@Controller('tenants')
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) { }

  // @UseGuards(AuthGuard('jwt'))
  // @Get()
  // findAll(): Promise<Tenant[]> {
  //   return this.tenantsService.findAll();
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('/:id')
  // getTenant(@Param('id') id): Promise<Tenant> {
  //   return this.tenantsService.findOne(id);
  // }

  @Get('/:tenant')
  getTenant(@Param('tenant') tenant): Promise<Tenant> {
    return this.tenantsService.findTenant(tenant);
  }

  // @Post()
  // @UseGuards(AuthGuard('jwt'))
  // create(@Body() tenantDto: TenantDto): Promise<Tenant> {
  //   console.log('tenantDto==========================');
  //   console.log(tenantDto);
  //   return this.tenantsService.create(tenantDto);
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @Patch('/:id')
  // updateTenant(@Body() updateTenantDto: TenantDto, @Param('id') id): Promise<Tenant> {
  //   return this.tenantsService.update(id, updateTenantDto);
  // }

  // @Delete(':id')
  // delete(@Param('id') id): Promise<Tenant> {
  //   return this.tenantsService.delete(id);
  // }

}

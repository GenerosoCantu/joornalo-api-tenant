import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsNotEmpty, IsBoolean } from 'class-validator';

export class TenantDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly tenant: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly status: string;
}
import { NumericLiteral } from "@babel/types";
import { Exclude } from 'class-transformer';

export class Tenant {
  _id?: string;
  tenant: string;
  status: string;
}

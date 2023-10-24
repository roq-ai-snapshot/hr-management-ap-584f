import { EmployeeInterface } from 'interfaces/employee';
import { HrManagerInterface } from 'interfaces/hr-manager';
import { JobInterface } from 'interfaces/job';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  hr_manager?: HrManagerInterface[];
  job?: JobInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    hr_manager?: number;
    job?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}

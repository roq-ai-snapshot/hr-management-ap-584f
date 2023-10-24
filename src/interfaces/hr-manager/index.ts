import { HrManagerInterface } from 'interfaces/hr-manager';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface HrManagerInterface {
  id?: string;
  department: string;
  user_id: string;
  organization_id: string;
  reports_to: string;
  job_title: string;
  created_at?: any;
  updated_at?: any;
  other_hr_manager?: HrManagerInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  hr_manager?: HrManagerInterface;
  _count?: {
    other_hr_manager?: number;
  };
}

export interface HrManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  department?: string;
  user_id?: string;
  organization_id?: string;
  reports_to?: string;
  job_title?: string;
}

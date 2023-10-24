import { ApplicantInterface } from 'interfaces/applicant';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  requirements?: string;
  salary: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  applicant?: ApplicantInterface[];
  organization?: OrganizationInterface;
  _count?: {
    applicant?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  requirements?: string;
  organization_id?: string;
}

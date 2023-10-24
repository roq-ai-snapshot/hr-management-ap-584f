import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ApplicantInterface {
  id?: string;
  resume: string;
  cover_letter?: string;
  status: string;
  user_id: string;
  job_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface ApplicantGetQueryInterface extends GetQueryInterface {
  id?: string;
  resume?: string;
  cover_letter?: string;
  status?: string;
  user_id?: string;
  job_id?: string;
}

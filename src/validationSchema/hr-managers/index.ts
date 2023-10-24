import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  department: yup.string().required(),
  job_title: yup.string().required(),
  user_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
  reports_to: yup.string().nullable().required(),
});

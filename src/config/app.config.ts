interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Employee'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator', 'Applicant'],
  tenantName: 'Organization',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Manage own employee information',
    'View organization information',
    'View job information',
  ],
  ownerAbilities: ['Manage users', 'Manage organizations', 'Manage employees', 'Manage jobs'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/c7b47faf-ebdd-4ac5-874a-68195c0f8fc3',
};

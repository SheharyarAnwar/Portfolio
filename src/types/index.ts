export enum SocialLinks {
  Remotebase = "https://www.linkedin.com/company/remotebasehq/",
  Qureos = "https://www.linkedin.com/company/qureos/",
  Vexuls = "https://www.linkedin.com/company/vexuls/",
  Panacloud = "https://www.panacloud.com/",
  Templific = "https://templific-e364c.web.app/login",
  Integrate = "http://integrate.st/",
}

export type Experience = {
  name: string;
  role: string;
  companyUrl: string;
  joiningDate: string;
  departureDate: string | undefined;
  achievements: (JSX.Element | string)[];
  outsourcingAgentName?: string;
  outsourcingAgentUrl?: string;
};

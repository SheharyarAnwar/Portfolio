export enum SocialLinks {
  Remotebase = "https://www.linkedin.com/company/remotebasehq/",
  Qureos = "https://www.linkedin.com/company/qureos/",
  Vexuls = "https://www.linkedin.com/company/vexuls/",
}

export type Experience = {
  name: string;
  role: string;
  companyUrl: string;
  joiningDate: string;
  departureDate: string | undefined;
  achievements: (JSX.Element | string)[];
};

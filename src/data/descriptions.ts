export type JobInfoCard = {
  jobTitle: string;
  location: string;
  dateRange: string;
  companyName: string;
};

export type JobDescription = {
  sumary: string;
};

type JobInfo = JobInfoCard & { description: JobDescription };

export const jobsInfo: JobInfo[] = [
  {
    jobTitle: "Tech Lead",
    location: "Santiago, Chile",
    dateRange: "Feb 2024 - Mar 2024",
    companyName: "U-Zave",
    description: {
      sumary: `Promoted for exceptional problem-solving and communication, driving system improvements.
        Successfully led a team of three developers and a DevOps, implementing efficient workflows with Jira and Git flow.
        Fostered a collaborative  and inclusive environment, maintaining high technical standards.`,
    },
  },
  {
    jobTitle: "Full Stack Developer",
    location: "Santiago, Chile",
    dateRange: "Jun 2023 - Jan 2024",
    companyName: "U-Zave",
    description: {
      sumary:
        "yada yadadfjalñ añskldjfañsldjkfñalkskj ñaf alkñjasdlñkj ñlkaksjdf añlslkdjf asdlñfj ",
    },
  },
  {
    jobTitle: "Software Engineer",
    location: "Santiago, Chile",
    dateRange: "Jun 2022 - Dec 2022",
    companyName: "Sandiman S.A.",
    description: {
      sumary:
        "yada yadadfjalñ añskldjfañsldjkfñalkskj ñaf alkñjasdlñkj ñlkaksjdf añlslkdjf asdlñfj ",
    },
  },
  {
    jobTitle: "Freelancer",
    location: "Santiago, Chile",
    dateRange: "May 2022 - Jun 2022",
    companyName: "Go-Ex",
    description: {
      sumary:
        "yada yadadfjalñ añskldjfañsldjkfñalkskj ñaf alkñjasdlñkj ñlkaksjdf añlslkdjf asdlñfj ",
    },
  },
];

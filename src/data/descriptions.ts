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
      sumary: `Promoted for exceptional problem-solving and communicate, driving system improvements. Successfully led a team of three
developers and a DevOps, implementing efficient workflows with Jira and Git flow. Fostered a collaborative and inclusive
environment, maintaining high technical standards.`,
    },
  },
  {
    jobTitle: "Full Stack Developer",
    location: "Santiago, Chile",
    dateRange: "Jun 2023 - Jan 2024",
    companyName: "U-Zave",
    description: {
      sumary:
        "Contributed to complex projects using Next.js, React.js, and backend technologies. Played a key role in frontend, backend, database, and API development, ensuring quality through testing and asynchronous processing.",
    },
  },
  {
    jobTitle: "Software Engineer",
    location: "Santiago, Chile",
    dateRange: "Jun 2022 - Dec 2022",
    companyName: "Sandiman S.A.",
    description: {
      sumary:
        "Developed a telecontrol project for an AUBO robotic arm, using Qt for visualization, RTCP for cameras, and C++/Python for programming.",
    },
  },
  {
    jobTitle: "Freelancer",
    location: "Santiago, Chile",
    dateRange: "May 2022 - Jun 2022",
    companyName: "Go-Ex",
    description: {
      sumary:
        "Developed a 'Put to Light' MVP, using a Raspberry Pi and Python. Integrated QR readers and smart bulbs, reducing sorting time in a warehouse from 3 hours to 20 minutes.",
    },
  },
];

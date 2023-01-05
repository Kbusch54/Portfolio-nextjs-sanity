interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}
export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Skill extends SanityBody {
  _type: "skill";
  progress: number;
  title: string;
  image: Image;
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}
export interface Project extends SanityBody {
  title: string;
  _type: "project";
  image: Image;
  linkToBuild: string;
  linkToSite: string;
  summary: string;
  technologies: Skill[];
}
export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingThere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Skill[];
}

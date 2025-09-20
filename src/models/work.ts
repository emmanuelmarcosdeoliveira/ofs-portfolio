class Work {
  id: number;
  role: string;
  company: string;
  startToDate: string;
  endToDate: string;
  workType: string;
  location: string;
  companyImage: string;
  descriptionRole: string;
  achievementsTitle: string;
  achievementsList: string[];
  softSkills: string[];
  constructor(
    id: number,
    role: string,
    company: string,
    startToDate: string,
    endToDate: string,
    workType: string,
    location: string,
    companyImage: string,
    descriptionRole: string,
    achievementsTitle: string,
    achievementsList: string[],
    softSkills: string[]
  ) {
    this.id = id;
    this.role = role;
    this.company = company;
    this.startToDate = startToDate;
    this.endToDate = endToDate;
    this.workType = workType;
    this.location = location;
    this.companyImage = companyImage;
    this.descriptionRole = descriptionRole;
    this.achievementsTitle = achievementsTitle;
    this.achievementsList = achievementsList;
    this.softSkills = softSkills;
  }
}
export { Work };

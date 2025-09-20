class Project {
  slug: string;
  name: string;
  description: string;
  imageURL: string;
  images: string[];
  features: string[];
  challenges: string[];
  onLine: string;
  gitHub: string;
  destaque: boolean;
  type: string;
  technologies: string[];

  constructor(
    slug: string,
    name: string,
    description: string,
    imageURL: string,
    images: string[],
    features: string[],
    challenges: string[],
    onLine: string,
    gitHub: string,
    destaque: boolean,
    type: string,
    technologies: string[]
  ) {
    this.slug = slug;
    this.name = name;
    this.description = description;
    this.imageURL = imageURL;
    this.images = images;
    this.features = features;
    this.challenges = challenges;
    this.onLine = onLine;
    this.gitHub = gitHub;
    this.destaque = destaque;
    this.type = type;
    this.technologies = technologies;
  }
}

export default Project;

export interface SocialIcon {
  platform: string;
  icon: string;
}

export interface Footer {
  title: string;
  description: string;
  socialIcons: SocialIcon[];
}

export interface Featured {
  sectionTitle: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

export interface SubItem {
  title: string;
  description: string;
  link: string;
}

export interface Category {
  id: string;
  title: string;
  icon: string;

  subItems: SubItem[];

  footer?: Footer;

  featured: Featured;
}

export interface Menu {
  title: string;
  categories: Category[];
}
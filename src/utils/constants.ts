import reactLogo from './../../public/reactlogo.svg';
import nextjslogo from './../../public/nextjslogo.svg';
import vuejslogo from './../../public/vuejslogo.svg';
import typescriptlogo from './../../public/typescriptlogo.svg';
import javascriptlogo from './../../public/javascriptlogo.svg';
import antdlogo from './../../public/antdlogo.svg';
import muilogo from './../../public/muilogo.svg';
import tailwindcsslogo from './../../public/tailwindcsslogo.svg';
import bootstraplogo from './../../public/bootstraplogo.svg';
import csslogo from './../../public/csslogo.svg';
import htmllogo from './../../public/htmllogo.svg';
import framermotionlogo from './../../public/framermotionlogo.svg';
import monstarzImg from './../../public/monstarzImg.png';
import youfirst from './../../public/youfirst.png';
import assistedLives from './../../public/assistedLives.png';
import zonebit from './../../public/zonebit.png';
import wordplay from './../../public/wordplay.png';
import nexters from './../../public/nexters.png';
import travelo from './../../public/travelo.png';
import mapty from './../../public/mapty.png';
import bankist from './../../public/bankist.png';
export const project1Tags = [
  {
    color: '#5ED3F3',
    tag: 'React',
  },
  {
    color: '#4096FF',
    tag: 'Ant Design'
  },
  {
    color: '#2F74C0',
    tag: 'TailwindCSS',
  },
  {
    color: '#4096FF',
    tag: 'WebSocket',
  },
  {
    color: '#5ED3F3',
    tag: 'Web Worker',
  },
];
export const project2Tags = [
  {
    color: '#5ED3F3',
    tag: 'React',
  },
  { color: '#4096FF', tag: 'Ant Design' },
  {
    color: '#2F74C0',
    tag: 'TailwindCSS',
  },
  {
    color: '#006494',
    tag: 'GraphQL',
  },
];
export const project3Tags = [
  {
    color: '#5ED3F3',
    tag: 'React',
  },
  { color: '#4096FF', tag: 'Ant Design' },
  {
    color: '#2F74C0',
    tag: 'Typescript',
  },
  {
    color: '#006494',
    tag: 'Vercel',
  },
];

export const project4Tags = [
  {
    color: '#5ED3F3',
    tag: 'React',
  },
  {
    color: '#006494',
    tag: 'Firebase',
  },
  { color: '#4096FF', tag: 'Ant Design' },
  {
    color: '#2F74C0',
    tag: 'Typescript',
  },
];

export const project5Tags = [
  {
    color: '#5ED3F3',
    tag: 'Next.js',
  },
  {
    color: '#006494',
    tag: 'Tailwindcss',
  },
  {
    color: '#2F74C0',
    tag: 'Typescript',
  },
];
export const project6Tags = [
  {
    color: '#5ED3F3',
    tag: 'HTML',
  },
  {
    color: '#2F74C0',
    tag: 'CSS',
  },
];
export const technlogies = [
  {
    logo: reactLogo,
    technology: 'React',
  },
  {
    logo: nextjslogo,
    technology: 'Nextjs',
  },
  {
    logo: vuejslogo,
    technology: 'Vuejs',
  },
  {
    logo: typescriptlogo,
    technology: 'Typescript',
  },
  {
    logo: javascriptlogo,
    technology: 'Javascript',
  },
  {
    logo: antdlogo,
    technology: 'Ant Design',
  },
  {
    logo: muilogo,
    technology: 'Material UI',
  },
  {
    logo: framermotionlogo,
    technology: 'Framer ',
  },
  {
    logo: tailwindcsslogo,
    technology: 'Tailwind',
  },
  {
    logo: bootstraplogo,
    technology: 'Bootstrap',
  },
  {
    logo: csslogo,
    technology: 'CSS',
  },
  {
    logo: htmllogo,
    technology: 'HTML',
  },
];

export interface ProjectData {
  id: number;
  imageSrc: any;
  imageAltText: string;
  projectTitle: string;
  projectDesc: string;
  projectYear: string;
  tags: string[];
  span: number;
  category: string;
}


export const cardData: ProjectData[] = [
    {
    id: 9,
    imageSrc: assistedLives,
    imageAltText: "project 2 | Assisted Lives",
    projectTitle: "Assisted Lives",
    projectDesc: "A digital care management platform",
    projectYear: "2025",
    tags: ["EHR", "Medical"],
    span: 12,
    category: "Collaborative Projects",
  },
  {
    id: 1,
    imageSrc: youfirst,
    imageAltText: "project 1 | YouFirst",
    projectTitle: "YouFirst",
    projectDesc: "A Human Resource Management(HRM) software",
    projectYear: "2024 - 2025",
    tags: ["HRM", "Software"],
    span: 12,
    category: "Collaborative Projects",
  },
  {
    id: 2,
    imageSrc: zonebit,
    imageAltText: "project 2 | ZoneBit",
    projectTitle: "ZoneBit",
    projectDesc: "A Crypto trading and casino platform",
    projectYear: "2024 - 2025",
    tags: ["Crypto", "Trading"],
    span: 12,
    category: "Collaborative Projects",
  },
  {
    id: 3,
    imageSrc: monstarzImg,
    imageAltText: "project 3 | Monstar",
    projectTitle: "Monstarz",
    projectDesc: "An e-commerce store along with admin dashboard",
    projectYear: "2023",
    tags: ["E-Commerce", "Admin"],
    span: 16,
    category: "Personal Projects",
  },
  {
    id: 4,
    imageSrc: wordplay,
    imageAltText: "project 4 | Wordplay",
    projectTitle: "Wordplay",
    projectDesc: "A simple fun-to-play web game",
    projectYear: "2024",
    tags: ["Game", "Fun"],
    span: 8,
    category: "Personal Projects",
  },
  {
    id: 5,
    imageSrc: travelo,
    imageAltText: "project 5 | Travelo",
    projectTitle: "Travelo",
    projectDesc: "A travel site to arrange tours and treks",
    projectYear: "2022",
    tags: ["Travel", "Tours"],
    span: 12,
    category: "Learning Projects",
  },
  {
    id: 6,
    imageSrc: nexters,
    imageAltText: "project 6 | Nexters",
    projectTitle: "Nexters",
    projectDesc: "A real estate site",
    projectYear: "2022",
    tags: ["Real Estate"],
    span: 12,
    category: "Learning Projects",
  },
  {
    id: 7,
    imageSrc: mapty,
    imageAltText: "project 7 | Mapty",
    projectTitle: "Mapty",
    projectDesc: "A workout mapping site",
    projectYear: "2022",
    tags: ["Workout"],
    span: 12,
    category: "Learning Projects",
  },
  {
    id: 8,
    imageSrc: bankist,
    imageAltText: "project 7 | Bankist",
    projectTitle: "Bankist",
    projectDesc: "A modern digital bank site",
    projectYear: "2022",
    tags: ["Finance"],
    span: 12,
    category: "Learning Projects",
  },
];

export const FAST_SCROLL = 20;
export const SLOW_SCROLL = 35;

export const largerDesktopBreakpoint = "(max-width: 1245px) and (min-width: 800px)"
export const largeDesktopBreakpoint = "(min-width: 1000px)"
export const desktopBreakpoint = "(min-width: 800px)"
export const tabletBreakpoint = "(min-width: 500px) and (max-width: 800px)"
export const mobileBreakpoint = "(max-width: 500px)"

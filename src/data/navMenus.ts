import { INavItem } from "@/types";
import {
  faHome,
  faUser,
  faBriefcase,
  faTimeline,
  faAward,
  faLaptopCode,
  faEnvelope,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

export const navMenus: INavItem[] = [
  // {
  //   name: "Home",
  //   link: "/#hero",
  //   icon: faHome,
  // },
  {
    name: "𝓐𝓫𝓸𝓾𝓽",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "𝓢𝓮𝓻𝓿𝓲𝓬𝓮𝓼",
    link: "/#services",
    icon: faBriefcase,
  },
  {
    name: "𝓔𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮𝓼",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "𝓢𝓴𝓲𝓵𝓵𝓼",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼",
    link: "/#projects",
    icon: faLaptopCode,
  },
  {
    name: "𝓒𝓸𝓷𝓽𝓪𝓬𝓽",
    link: "/#contact",
    icon: faEnvelope,
  },
  // {
  //   name: "𝓟𝓪𝔂𝓶𝓮𝓷𝓽",
  //   link: "/payment",
  //   icon: faCreditCard,
  // },
];

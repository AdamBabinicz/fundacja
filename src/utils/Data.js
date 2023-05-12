import Project1 from "../assets/5.jpg";
import Project2 from "../assets/10.jpg";
import Project3 from "../assets/3.jpg";
import Project4 from "../assets/11.jpg";
import Project5 from "../assets/14.jpg";
import Project6 from "../assets/12.jpg";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai";
import { FaVolleyballBall } from "react-icons/fa";
import { MdPalette } from "react-icons/md";
import { BsFillCloudSunFill } from "react-icons/bs";

export const Skills = [
  {
    id: 0,
    tech: "Fundacja",
    icon: "STATUS",
  },
  {
    id: 1,
    tech: "118 14 28 385",
    icon: "NIP",
  },
  {
    id: 2,
    tech: "014902795",
    icon: "REGON",
  },
  {
    id: 3,
    tech: "0000037904",
    icon: "KRS",
  },
  {
    id: 4,
    tech1: "Traugutta 40",
    tech: "26-600 Radom",
    icon: <SlLocationPin />,
  },
  {
    id: 5,
    tech: "000 000 000",
    icon: <AiOutlinePhone />,
  },
];

export const projectDetails = [
  {
    id: 1,
    project_name: "Zajęcia plastyczne",
    project_desc: "Zajęcia dla różnych grup wiekowych",
    tech_stack: ["Rysunek", "Grafika", "Malarstwo", "Komiks"],
    project_img: Project1,
    img: Project3,
    project_n: 1,
    reverse: false,
    icon: <MdPalette />,
  },
  {
    id: 2,
    project_name: "Zajęcia sportowe",
    project_desc: "Zajęcia dla różnych grup wiekowych",
    tech_stack: ["Piłka nożna", "Lekkoatletyka", "Siatkówka"],
    project_img: Project2,
    img: Project4,
    project_n: 2,
    reverse: true,
    icon: <FaVolleyballBall />,
  },
  {
    id: 3,
    project_name: "Zajęcia rekreacyjne",
    project_desc: "Zajęcia dla różnych grup wiekowych",
    tech_stack: ["Parki zabaw", "Pikniki", "Wycieczki"],
    project_img: Project5,
    img: Project6,
    project_n: 3,
    reverse: false,
    icon: <BsFillCloudSunFill />,
  },
];

export const navLinks = [
  {
    id: 1,
    name: "Start",
    href: "start",
  },
  {
    id: 2,
    name: "Informacje",
    href: "informacje",
  },
  {
    id: 3,
    name: "Zajęcia",
    href: "zajęcia",
  },
  {
    id: 4,
    name: "Kontakt",
    href: "kontakt",
  },
];

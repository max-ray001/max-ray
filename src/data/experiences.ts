import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Full Stack Engineer",
    company: "GUILD",
    startDate: "Feb 2024",
    isCurrentJob: true,
    location: "Tokyo, Japan",
    description: [
      "Built a business matching system, focusing on comprehensive system design and user experience.",
      "Designed databases and APIs for user management, including roles, email forwarding, and social login.",
      "Developed features for project management, company management, and integrated chat functionality.",
      "Conducted ongoing maintenance and feature enhancements to ensure system reliability and user satisfaction.",
    ],
  },
  {
    designation: "Mobile Engineer",
    company: "DB Gaming",
    startDate: "May 2024",
    endDate: "Jul 2024",
    isCurrentJob: false,
    location: "Pasay, Philippines",
    description: [
      "Developed casino games for Android and iOS, enhancing user engagement.",
      "Designed and implemented theme-switching functionality, allowing users to customize their gaming experience.",
      "Collaborated with cross-functional teams to ensure high-quality game development and deployment.",
      "Demonstrated proficiency in mobile application development and user interface design",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "EST-System",
    startDate: "Dec 2023",
    endDate: "Feb 2024",
    isCurrentJob: false,
    location: "Tokyo, Japan",
    description: [
      "Developed a web-based groupware system, enhancing collaboration and productivity within teams.",
      "Implemented robust data storage solutions, improving system reliability and performance.",
      "Demonstrated strong problem-solving skills and technical expertise in API integration and database management.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Aislesoft",
    startDate: "Jun 2023",
    endDate: "Nov 2023",
    isCurrentJob: false,
    location: "Aichi, Japan",
    description: [
      "Built an online school WebRTC meeting system utilizing Jitsi-Meet for robust real-time communication.",
      "Established a WebRTC server using Jitsi-Meet, ensuring high-quality video and audio performance.",
      "Customized the Jitsi-Meet desktop application to enhance user experience and functionality.",
      "Demonstrated expertise in real-time communication technologies and web development.",
    ],
  },
  {
    designation: "Back-End Developer",
    company: "iExcel Technologies",
    startDate: "Aug 2021",
    endDate: "Dec 2022",
    isCurrentJob: false,
    location: "Central, Hong Kong",
    description: [
      "Developed travel booking systems, contract management systems, and tax office management systems with generous capabilities.",
      "Prioritized clean, reusable code with modern tech stacks.",
      "Engaged in backend development, including API design and detailed system architecture.",
      "Demonstrated proficiency in full-stack development by integrating seamless API functionalities across applications.",
    ],
  },
  {
    designation: "Front-End Developer",
    company: "Web Synergies",
    startDate: "Sep 2018",
    endDate: "Jun 2021",
    isCurrentJob: false,
    location: "Ubi Cres, Singapore",
    description: [
      "Developed research lab management systems, ERP systems for manufacturing companies, and travel booking systems with seamless backend API integration.",
      "Conducted requirements analysis and system design to streamline workflows and enhance user experiences.",
      "Demonstrated expertise in frontend development through comprehensive project involvement.",
    ],
  },
];

export default experiences;

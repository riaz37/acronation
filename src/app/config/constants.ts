import DigitalMarketingIcon from "@/assets/icons/DigitalMarketingIcon";
import WebAppDevelopmentIcon from "@/assets/icons/WebAppDevelopmentIon";

// temporary colors
const bluishColor = "#1877F2";
const pinkishColor = "#E6006E";
const purpleishColor = "#6A5AEA";

const bgBluishColor = "rgba(24, 119, 242, 0.06)";
const bgPinkishColor = "rgba(230, 0, 110, 0.06)";
const bgPurpleishColor = "rgba(106, 90, 234, 0.06)";

const webAppDevelopmentSubCategories: ServiceSubCategoryType[] = [
  {
    title: "Full Stack Web Development",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "WordPress Development",
    color: pinkishColor,
    bgColor: bgPinkishColor,
  },
  {
    title: "App Development",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "Template Design",
    color: purpleishColor,
    bgColor: bgPurpleishColor,
  },
];
const digitalMarketingSubCategories: ServiceSubCategoryType[] = [
  {
    title: "Video & Graphics Design",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "Digital Marketing",
    color: pinkishColor,
    bgColor: bgPinkishColor,
  },
  {
    title: "SEO",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "Social media management",
    color: purpleishColor,
    bgColor: bgPurpleishColor,
  },
];
const cybersecurityTestingSubCategories: ServiceSubCategoryType[] = [
  {
    title: "Penetration Testing",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "Cyber Security",
    color: pinkishColor,
    bgColor: bgPinkishColor,
  },
  {
    title: "Network & Application Security",
    color: purpleishColor,
    bgColor: bgPurpleishColor,
  },
];

const artificialIntelligentDevelopmentSubCategories: ServiceSubCategoryType[] =
  [
    {
      title: "Machine Learning Solutions",
      color: bluishColor,
      bgColor: bgBluishColor,
    },
    {
      title: "Natural Language Processing (NLP)",
      color: pinkishColor,
      bgColor: bgPinkishColor,
    },
    {
      title: "Computer Vision & Image Recognition",
      color: bluishColor,
      bgColor: bgBluishColor,
    },
    {
      title: "AI-Powered Chatbots & Virtual Assistants",
      color: purpleishColor,
      bgColor: bgPurpleishColor,
    },
  ];

const devOpsCloudServicesSubCategories: ServiceSubCategoryType[] = [
  {
    title: "DevOps Services",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "Cloud Solutions & Migration",
    color: pinkishColor,
    bgColor: bgPinkishColor,
  },
];

const businessSolutionsSubCategories: ServiceSubCategoryType[] = [
  {
    title: "CRM & ERP Solutions",
    color: bluishColor,
    bgColor: bgBluishColor,
  },
  {
    title: "API Development & Integration",
    color: pinkishColor,
    bgColor: bgPinkishColor,
  },
];

export const serviceCategory: ServiceCategoryType[] = [
  {
    title: "Web & app Development",
    Icon: WebAppDevelopmentIcon,
    subCategories: webAppDevelopmentSubCategories,
    link: "/",
  },
  {
    title: "Design & Marketing ",
    Icon: DigitalMarketingIcon,
    subCategories: digitalMarketingSubCategories,
    link: "/",
  },
  {
    title: "Cybersecurity & Testing",
    Icon: DigitalMarketingIcon,
    subCategories: cybersecurityTestingSubCategories,
    link: "/",
  },
  {
    title: "Artificial Intelligent Development",
    Icon: DigitalMarketingIcon,
    subCategories: artificialIntelligentDevelopmentSubCategories,
    link: "/",
  },
  {
    title: "DevOps & Cloud Services",
    Icon: DigitalMarketingIcon,
    subCategories: devOpsCloudServicesSubCategories,
    link: "/",
  },
  {
    title: "Business Solutions",
    Icon: DigitalMarketingIcon,
    subCategories: businessSolutionsSubCategories,
    link: "/",
  },
];

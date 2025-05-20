import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Diamond Mining",
    href: "/projects",
    tags: ["Excel", "PowerBI", "Tableau"],
    image: {
      LIGHT: "/images/projects/LightDiamondProjectBI.webp",
      DARK: "/images/projects/DarkDiamondProjectBI.webp",
    },
  },
  {
    index: 1,
    title: "Project Management",
    href: "/projects",
    tags: ["GoogleSheet_automation", "AppScript"],
    image: {
      LIGHT: "/images/projects/LightPM.webp",
      DARK: "/images/projects/DarkPM.webp",
    },
  },
  {
    index: 2,
    title: "Wine Market Intelligence",
    href: "/projects",
    tags: ["Google BigQuery", "Python", "Grafana"],
    image: {
      LIGHT: "/images/projects/LightWine.webp",
      DARK: "/images/projects/DarkWine.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Diamond Mining",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/LightDiamondProjectBI.webp",
      "/images/projects/DarkDiamondProjectBI.webp",
    ],
    description:
      "Scraped 183,000+ diamond listings from BlueNile using Python (Selenium), starting with dynamic ID extraction followed by detailed feature capture including the 4Cs, fluorescence, polish, symmetry, and certification data. Visualized key metrics and pricing patterns using Power BI and Tableau dashboards. Identified Round-cut diamonds as the dominant shape, with Radiant and Princess cuts emerging as valuable opportunities based on popularity and price-per-carat trends. Data source acknowledged: BlueNile",
    liveWebsiteHref:
      "https://drive.google.com/drive/folders/1W2Zh5zdYyuESJv-9jMurPDUJMequumUN?usp=sharing",
  },
  {
    name: "Wine Market Intelligence",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/wine1.webp",
      "/images/projects/wine2.webp",
      "/images/projects/wine3.webp",
    ],
    description:
      "Scraped and harmonized data from three major wine distributors: Total Wine, Wine.com, and Vivino, using Python to analyze 5,800+ products across 2,400 brands and 29 regions. Designed two Grafana dashboards for high-level and distributor-specific insights, revealing pricing trends, top varietals, and customer rating patterns. Identified strategic gaps and recommended targeted marketing tactics, product segmentation, and inventory strategies to boost revenue potential.",
    liveWebsiteHref:
      "https://drive.google.com/drive/u/0/folders/1zACqU_UeflH7I37c9z8zi2T35TDiUWNw",
  },
  {
    name: "Summer Vacation Prediction",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/prediction.webp",
      "/images/projects/prediction1.webp",
      "/images/projects/prediction2.webp",
      "/images/projects/prediction3.webp",
      "/images/projects/prediction4.webp",
      "/images/projects/prediction5.webp",
      "/images/projects/prediction6.webp",
      "/images/projects/prediction7.webp",
      "/images/projects/prediction8.webp",
      "/images/projects/prediction9.webp",
      "/images/projects/prediction10.webp",
      "/images/projects/prediction11.webp",
      "/images/projects/prediction12.webp",
    ],
    description:
      "End-to-end travel analytics project using Python and Streamlit. Scraped real-time flight, Airbnb, and Reddit data, performed exploratory and sentiment analysis, built machine learning models (XGBoost, VADER), and delivered interactive dashboards for destination recommendations.",
    liveWebsiteHref:
      "https://drive.google.com/file/d/10pTiR_oWthNBcnFtg4hXBzEiEpvSmXju/view?usp=sharing",
  },
  {
    name: "Project Management",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/LightPM.webp", "/images/projects/PM2.webp"],
    description:
      "Automated project management tracker using Google Sheets and Apps Script. Built a time-tracking system to monitor teammate activity and deadlines in real time, streamlining task updates and improving accountability.",
    liveWebsiteHref:
      "https://docs.google.com/spreadsheets/d/1ibVi_5r833_DNTYLLtGQuSrnmi9pWR2z74jPylkMmhM/edit?usp=sharing",
  },
  {
    name: "Employee Training Tracker",
    favicon: "/images/projects/logos/covidtracker.ico",
    imageUrl: [
      "/images/projects/HR1.webp",
      "/images/projects/HR2.webp",
      "/images/projects/HR3.webp",
    ],
    description:
      "Employee tracker dashboard for HR staff to compare training engagement across divisions and schools by course. Built a reusable and visual dashboard for internal insights by using Google Looker Studio. *Note: Mockup version used to protect confidential content.*",
    liveWebsiteHref:
      "https://lookerstudio.google.com/reporting/295713f6-95ff-4819-8174-4c7fde1b3e09",
  },
  {
    name: "Friesland Campina Pitching Proposal",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/FCV1.webp",
      "/images/projects/FCV2.webp",
      "/images/projects/FCV3.webp",
      "/images/projects/FCV4.webp",
      "/images/projects/FCV5.webp",
      "/images/projects/FCV6.webp",
      "/images/projects/FCV7.webp",
    ],
    description:
      "Pitching proposal developed from the ground up by analyzing market trends, identifying client strengths, and uncovering niche opportunities. Delivered a strategic plan targeting relevant segments and enhancing the client’s unique positioning to bridge market gaps.",
    liveWebsiteHref:
      "https://drive.google.com/file/d/1hzxwIJQOygc2zzW-8YFXoZZM7Vf4BRAw/view?usp=drive_link",
  },
];

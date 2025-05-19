// Define your new skills content
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiPowerbi,
  SiMicrosoftsqlserver,
  SiMysql,
  SiPostgresql,
  SiSelenium,
  SiJupyter,
  SiScikitlearn,
  SiGit,
  SiVisualstudiocode,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftexcel,
  SiNotion,
  SiRstudio,
  SiTrello,
  SiAsana,
  SiGrafana,
  SiStreamlit,
  SiGoogleanalytics,
} from "react-icons/si";

export const dataAnalystSkills = [
  {
    sectionName: "Languages and Tools",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL Server", icon: SiMicrosoftsqlserver },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "RStudio", icon: SiRstudio },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Selenium", icon: SiSelenium },
      { name: "Streamlit", icon: SiStreamlit },
    ],
  },
  {
    sectionName: "BI & Visualization",
    skills: [
      { name: "Power BI", icon: SiPowerbi },
      { name: "Tableau", icon: SiTableau },
      { name: "Excel", icon: SiMicrosoftexcel },
      { name: "Grafana", icon: SiGrafana },
      { name: "Looker Studio", icon: SiGoogleanalytics },
    ],
  },
  {
    sectionName: "Development Tools",
    skills: [
      { name: "Jupyter Notebook", icon: SiJupyter },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Git", icon: SiGit },
      { name: "AWS", icon: SiAmazonaws },
      { name: "Google Cloud", icon: SiGooglecloud },
    ],
  },
  {
    sectionName: "Project & Collaboration",
    skills: [
      { name: "Notion", icon: SiNotion },
      { name: "Trello", icon: SiTrello },
      { name: "Asana", icon: SiAsana },
    ],
  },
];

// OPTIONAL: Add color support for themed or brand icons
// Add a "color" property to each skill if you want to use actual logo colors
// or use CSS classes (e.g., "text-theme" or "text-[color]") in the SkillPill component.

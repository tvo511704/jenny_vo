import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Jenny | Data Concierge"
        description="Learn more about Jenny, a dedicated Data Analyst and Project Management Coordinator with 2 years of experience. Discover how my journey, analytical skills, and project management experience empower me to deliver data-driven insights and streamlined, user-focused solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Jenny - Data Analyst",
          description:
            "Dive into the story of Jenny, a Data Analyst. Uncover the experiences, skills, and passion that drive my commitment to delivering impactful data insights and efficient project outcomes.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Jenny - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Data Analyst portfolio, Project Management Coordinator, Python, SQL, PowerBI, Tableau, Google Sheets, Asana, Trello",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}

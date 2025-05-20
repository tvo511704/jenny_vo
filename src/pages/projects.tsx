import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects by Jenny - Data Concierge"
        description="Explore a collection of projects by Jenny, a skilled Data Analyst with end-to-end problem-solving capabilities — from data collection and analysis to actionable insights and impactful visualizations."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Jenny - Data Concierge",
          description:
            "Explore projects by Jenny, a Data Analyst skilled in solving problems end-to-end — from data gathering to delivering clear, actionable insights.",
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
              "Projects,Jenny Portfolio, Data Analyst, Project Management Coordinator, Python, SQL, Google Sheets, Excel, PowerBI, Tableau, Grafana, R Studio",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              From dashboards to automation, these projects showcase my ability
              to deliver end-to-end solutions — from identifying problems,
              handling missing data, conducting exploratory analysis, uncovering
              insights, and driving measurable results.
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              I’m currently immersed in a variety of real-world cases,
              delivering end-to-end data projects. My passion for this field
              continues to grow with every challenge I tackle.
            </span>
            <p className="mt-10 text-base md:text-xl">
              Stay tuned and explore all my latest work on{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

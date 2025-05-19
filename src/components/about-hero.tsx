import Image from "next/image";
import Link from "next/link";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";
import heroProfileImg from "@/public/images/heroProfile.png";

export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
      <div className="w-full sm:w-1/2 md:w-2/3 lg:inline-block lg:h-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="hero-image" duration={0.6}>
            <Image
              src={heroProfileImg}
              width={100}
              height={100}
              className="h-auto w-full px-0 xl:px-16"
              alt="hero image"
              unoptimized
            />
          </FadeUp>
        </AnimatePresence>
      </div>
      <div className="sm:1/2 mt-10 w-full lg:w-1/2">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Jenny
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              <br />
              <br />
              <p>
                With a strong foundation in{" "}
                <span className="font-semibold text-accent">Python</span>,{" "}
                <span className="font-semibold text-accent">SQL</span>,{" "}
                <span className="font-semibold text-accent">Excel</span>, and{" "}
                <span className="font-semibold text-accent">Tableau</span>, I
                uncover trends and deliver clear analytics.
              </p>
              <br></br>I manage projects efficiently using tools like{" "}
              <span className="font-semibold text-accent">ClickUp</span>,{" "}
              <span className="font-semibold text-accent">Trello</span>,{" "}
              <span className="font-semibold text-accent">Asana</span>, and{" "}
              <span className="font-semibold text-accent">Google Sheets</span>{" "}
              ensuring every initiative stays aligned and on track.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
              Explore my latest{" "}
              <Link href="/projects" className="underline underline-offset-4">
                <span className="text-accent">projects</span>
              </Link>{" "}
              showcasing my expertise in Python, SQL, Google Sheets, Tableau and
              PowerBI.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="USA flag"
                src="https://flagcdn.com/us.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              California, USA
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}

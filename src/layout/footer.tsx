import { LinkedinIcon } from "@/components/icons";
import { MailIcon } from "lucide-react";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div
        className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-cover bg-center bg-no-repeat p-8 text-background sm:p-12 md:gap-12 lg:p-20"
        style={{
          backgroundImage: "url('/images/background.jpeg')",
          backgroundColor: "rgba(10, 113, 120, 0.53)",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Header Text */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>

        {/* Email */}
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
        >
          {siteMetadata.email}
        </a>

        {/* Icons Row */}
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${siteMetadata.email}`}
            target="_blank"
            aria-label="Send Email"
          >
            <MailIcon className="h-12 w-12 text-background hover:text-white" />
          </a>
          <a href={siteMetadata.linkedin} target="_blank" aria-label="LinkedIn">
            <LinkedinIcon className="h-12 w-12 text-background hover:text-white" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">©2025 Jenny</span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="Link to LinkedIn"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}

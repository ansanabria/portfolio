import ClockImage from "@/../public/illustrations/clock.png"
import PersonImage from "@/../public/illustrations/person.png"
import MarketingImage from "@/../public/illustrations/marketing.png"
import MovieImage from "@/../public/illustrations/movie.png"

import { ProjectDataProps } from "@/types"

export const projects: ProjectDataProps[] = [
  {
    title: "DóndeVeo",
    websiteUrl: "https://dondeveo.vercel.app/",
    githubUrl: "https://github.com/ansanabria/dondeveo",
    description:
      "Search engine for finding out in which streaming service a movie or TV show is. It currently works only in Colombia.",
    image: MovieImage,
    tags: ["Next.js", "React", "Tailwind", "Typescript"],
  },
  {
    title: "Cronos Timer",
    websiteUrl: "https://cronos-timer.vercel.app/",
    githubUrl: "https://github.com/ansanabria/cronos",
    description: "SPA timer with interactive input. Based on Google Timer.",
    image: ClockImage,
    tags: ["React", "Tailwind", "Web workers"],
  },
  {
    title: "Developer portfolio for showcasing my work",
    websiteUrl: "https://ansanabria.vercel.app/",
    githubUrl: "https://github.com/ansanabria/portfolio",
    figmaUrl:
      "https://www.figma.com/file/1ZqtytlMsyKy2f4dFi340b/Personal-Portfolio?node-id=0%3A1",
    description: "My personal developer portfolio.",
    image: PersonImage,
    tags: ["Figma", "Next.js", "React", "Tailwind", "Typescript"],
  },
  {
    title: "Website for Cartulinas Sanabria SAS",
    websiteUrl: "https://cartulinasanabria.vercel.app/",
    description: "Website for the company Cartulinas Sanabria SAS.",
    image: MarketingImage,
    tags: ["Figma", "Next.js", "React", "Tailwind", "MDX", "Typescript"],
  },
]

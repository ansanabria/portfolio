import BooksImage from "@/../public/illustrations/books.png"
import PersonImage from "@/../public/illustrations/person.png"
import MarketingImage from "@/../public/illustrations/marketing.png"
import MovieImage from "@/../public/illustrations/movie.png"

import { ProjectDataProps } from "@/types"

export const projects: ProjectDataProps[] = [
  {
    title: "StreamFinder",
    websiteUrl: "https://cinema-finder.vercel.app/",
    description:
      "Search engine for finding out in which streaming service a movie or TV show is. It currently works only in Colombia.",
    image: MovieImage,
    tags: ["Next.js", "React", "Tailwind", "REST API", "Typescript"],
  },
  {
    title: "Blog for the poetry group of Universidad de los Andes, Colombia",
    websiteUrl: "https://poesia-uniandes-blog.vercel.app/",
    githubUrl: "https://github.com/jandrev1312/poesia-uniandes",
    description:
      "Blog for the poetry group of Universidad de los Andes, Colombia.",
    image: BooksImage,
    tags: ["Astro", "Tailwind"],
  },
  {
    title: "Developer portfolio for showcasing my work",
    websiteUrl: "https://www.jandrev.com/",
    githubUrl: "https://github.com/jandrev1312/portfolio",
    figmaUrl:
      "https://www.figma.com/file/1ZqtytlMsyKy2f4dFi340b/Personal-Portfolio?node-id=0%3A1",
    description: "My personal developer portfolio.",
    image: PersonImage,
    tags: ["Figma", "Next.js", "React", "Tailwind", "Typescript"],
  },
  {
    title: "Website for Cartulinas Sanabria SAS",
    websiteUrl: "https://cartulinasanabria.vercel.app/",
    description:
      "Website for the company Cartulinas Sanabria SAS. Because of a CDA, I cannot show the code nor the Figma design of the website.",
    image: MarketingImage,
    tags: ["Figma", "Next.js", "React", "Tailwind", "MDX", "Typescript"],
  },
]

import BooksImage from "@/../public/illustrations/books.png"
import PersonImage from "@/../public/illustrations/person.png"
import { ProjectDataProps } from "@/types"

export const projects: ProjectDataProps[] = [
  {
    id: "poesia-uniandes-blog",
    title: "Blog for the poetry group of Universidad de los Andes, Colombia",
    websiteUrl: "https://poesia-uniandes-blog.vercel.app/",
    githubUrl: "https://github.com/jandrev1312/poesia-uniandes",
    description:
      "In this project, I used the relatively new Astro framework for building a static website. The poetry group of Universidad de los Andes needed a blog for publishing their content. I could have used Wordpress or other blog publishing platform, but I wanted to test how fast I could make a blog (both in terms of performance and time). The result of that is this project, which I am pretty proud of.",
    image: BooksImage,
    tags: ["Astro", "Tailwind"],
  },
  {
    id: "portfolio",
    title: "Developer portfolio for showcasing my work",
    websiteUrl: "https://www.jandrev.com/",
    githubUrl: "https://github.com/jandrev1312/portfolio",
    figmaUrl: 'https://www.figma.com/file/1ZqtytlMsyKy2f4dFi340b/Personal-Portfolio?node-id=0%3A1',
    description:
      "In this project, I needed a developer portfolio for showcasing my portfolio to potential recruiters, so I designed it in Figma and developed it in Next.js and Tailwind. Besides that, it is also the online entrance to my personal developer blog.",
    image: PersonImage,
    tags: ["Figma", "Next.js", "React", "Tailwind"],
  },
]

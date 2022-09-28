import { StaticImageData } from "next/image"

export type TagsKeys =
  | "Figma"
  | "Tailwind"
  | "Astro"
  | "React"
  | "Next.js"
  | "Firebase"
  | "MDX"
  | "REST API"
  | "Typescript"

export interface ProjectCardProps {
  title: string
  description: string
  websiteUrl: string
  githubUrl?: string
  figmaUrl?: string
  image: StaticImageData
  tags: TagsKeys[]
}

export interface ProjectDataProps extends ProjectCardProps {}

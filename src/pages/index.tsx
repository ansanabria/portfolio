import { projects } from "@/data/projects"
import { ProjectCardProps, TagsKeys } from "@/types"
import Head from "next/head"
import Image from "next/image"
import {
  AiFillGithub as GitHubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiOutlineTwitter as TwitterIcon,
} from "react-icons/ai"
import ProfileImage from "@/../public/images/profile.png"
import {
  FiExternalLink as ExternalLinkIcon,
  FiFigma as FigmaIcon,
} from "react-icons/fi"
import { v4 as uuidv4 } from "uuid"

const TagsColors: Record<TagsKeys, string> = {
  Figma: "bg-purple-600",
  Tailwind: "bg-blue-600",
  Firebase: "bg-yellow-400",
  Astro: "bg-orange-600",
  React: "bg-cyan-600",
  "Next.js": "bg-green-600",
  MDX: "bg-rose-600",
  "REST API": "bg-lime-600",
  Typescript: "bg-indigo-600",
  CMS: "bg-fuchsia-600",
}

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between">
      <div className="relative mx-auto mb-12 aspect-square w-56 rounded-full bg-gray-400 md:m-0">
        <Image src={ProfileImage} layout="fill" priority />
      </div>
      <div className="text-center md:text-left">
        <div className="mb-8 max-w-md">
          <h1 className="mb-3 text-3xl font-bold">Hi, I am Andrés Sanabria</h1>
          <p className="md:text-md">
            I’m a frontend engineer & web designer. I obsess over shipping
            products fast while learning as much as I can from those projects.
          </p>
        </div>
        <div className="flex justify-center space-x-8 md:justify-start">
          <a
            href="https://github.com/jandrev1312"
            target="_blank"
            rel="noreferrer"
            title="GitHub icon"
          >
            <GitHubIcon className="h-8 w-8 duration-200 ease-in hover:scale-110" />
          </a>
          <a
            href="https://twitter.com/jandrev1312"
            target="_blank"
            rel="noreferrer"
            title="Twitter icon"
          >
            <TwitterIcon className="h-8 w-8 fill-twitter duration-200 ease-in hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/jandrev/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin icon"
          >
            <LinkedinIcon className="h-8 w-8 fill-linkedin duration-200 ease-in hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={uuidv4()} {...project} />
      ))}
    </div>
  )
}

const ProjectCard = ({
  image,
  title,
  description,
  websiteUrl,
  githubUrl,
  figmaUrl,
  tags,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 rounded-md bg-secondary p-6 md:flex-row md:items-center md:justify-between md:space-y-0">
      <Image
        src={image}
        alt="Project image"
        width={128}
        height={150}
        objectFit="contain"
      />
      <div className="flex w-full flex-col items-center space-y-3 md:max-w-lg md:items-start">
        <h3 className="text-center text-xl font-medium md:text-left">
          {title}
        </h3>
        <div className="flex flex-wrap justify-around gap-y-2 gap-x-2 md:justify-start">
          {tags.map((tag) => (
            <ProjectLabel key={tag} tag={tag} />
          ))}
        </div>
        <p className="w-full opacity-70">{description}</p>
        <div className="flex space-x-8">
          <a
            className="group flex items-center space-x-1"
            href={websiteUrl}
            rel="noreferrer"
            target="_blank"
          >
            <ExternalLinkIcon size={20} />
            <span className="underline-offset-4 group-hover:underline">
              Website
            </span>
          </a>
          {githubUrl && (
            <a
              className="group flex items-center space-x-1"
              href={githubUrl}
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon size={20} />
              <span className="underline-offset-4 group-hover:underline">
                Code
              </span>
            </a>
          )}
          {figmaUrl && (
            <a
              className="group flex items-center space-x-1"
              href={figmaUrl}
              rel="noreferrer"
              target="_blank"
            >
              <FigmaIcon />
              <span className="underline-offset-4 group-hover:underline">
                Design
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const ProjectLabel = ({ tag }: { tag: TagsKeys }) => {
  return (
    <div
      className={`${TagsColors[tag]} rounded-md px-3 py-1 text-xs font-bold`}
    >
      {tag}
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Head>
        <title>Andrés Sanabria developer portfolio</title>
        <meta
          name="description"
          content="See the showcase of my recent projects, the technologies I used and my
          blog posts. I am Andrés Sanabria."
        />
      </Head>
      <HeroSection />
      <ProjectsSection />
    </div>
  )
}

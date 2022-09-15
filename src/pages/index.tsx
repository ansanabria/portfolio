import { projects } from "@/data/projects"
import { ProjectCardProps, TagsKeys } from "@/types"
import Head from "next/head"
import Image from "next/image"
import {
  AiFillGithub as GitHubIcon,
  AiFillLinkedin as LinkedinIcon,
  AiOutlineTwitter as TwitterIcon,
} from "react-icons/ai"
import { BsDot } from "react-icons/bs"
import { FiExternalLink as ExternalLinkIcon } from "react-icons/fi"
import { SiHashnode as HashnodeIcon } from "react-icons/si"
import { FiFigma as FigmaIcon } from "react-icons/fi"

const TagsColors: Record<TagsKeys, string> = {
  Figma: "bg-purple-600",
  Tailwind: "bg-blue-600",
  Firebase: "bg-yellow-400",
  Astro: "bg-orange-600",
  React: "bg-cyan-600",
  "Next.js": "bg-green-600",
}

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between">
      <div className="mx-auto mb-12 aspect-square w-56 rounded-full bg-gray-400 md:m-0" />
      <div className="text-center md:text-left">
        <div className="mb-8 max-w-md">
          <h1 className="mb-3 text-3xl font-bold">Hi, I am Andrés Sanabria</h1>
          <p className="md:text-md">
            I’m a full-stack engineer & web designer. I obsess over shipping
            products fast while learning as much as I can from those projects.
          </p>
        </div>
        <div className="flex justify-center space-x-8 md:justify-start">
          <a
            href="https://github.com/jandrev1312"
            target="_blank"
            title="GitHub icon"
          >
            <GitHubIcon className="h-8 w-8 duration-200 ease-in hover:scale-110" />
          </a>
          <a
            href="https://twitter.com/jandrev1312"
            target="_blank"
            title="Twitter icon"
          >
            <TwitterIcon className="h-8 w-8 fill-twitter duration-200 ease-in hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/jandrev/"
            target="_blank"
            title="Linkedin icon"
          >
            <LinkedinIcon className="h-8 w-8 fill-linkedin duration-200 ease-in hover:scale-110" />
          </a>
          <a
            href="https://blog.jandrev.com/"
            target="_blank"
            title="Hashnode icon"
          >
            <HashnodeIcon className="h-8 w-8 fill-hashnode duration-200 ease-in hover:scale-110" />
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
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  )
}

const BlogSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Posts</h2>
      <PostCard />
      <PostCard />
      <PostCard />
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
            target="_blank"
          >
            <ExternalLinkIcon size={20} />
            <span className="underline-offset-4 group-hover:underline">
              Website
            </span>
          </a>
          <a
            className="group flex items-center space-x-1"
            href={githubUrl}
            target="_blank"
          >
            <GitHubIcon size={20} />
            <span className="underline-offset-4 group-hover:underline">
              Code
            </span>
          </a>
          {figmaUrl && (
            <a
              className="group flex items-center space-x-1"
              href={figmaUrl}
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

const PostCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 rounded-md bg-secondary p-6 md:items-start md:space-y-3">
      <h3 className="text-xl font-medium">Post title</h3>
      <div className="flex items-center space-x-3 text-sm font-light">
        <div>X months ago</div>
        <BsDot className="aspect-square w-4" />
        <div>X min to read</div>
      </div>
      <p className="w-full opacity-70">Post description</p>
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
      <BlogSection />
    </div>
  )
}

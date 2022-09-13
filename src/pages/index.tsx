import Head from "next/head"
import {
  AiFillGithub as GitHubIcon,
  AiOutlineTwitter as TwitterIcon,
} from "react-icons/ai"
import { BsDot } from "react-icons/bs"
import { SiHashnode as HashnodeIcon } from "react-icons/si"

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
          <GitHubIcon className="h-8 w-8" />
          <TwitterIcon className="h-8 w-8 fill-twitter" />
          <HashnodeIcon className="h-8 w-8 fill-hashnode" />
        </div>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
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

const ProjectCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 rounded-md bg-secondary p-6 md:flex-row md:items-center md:justify-between md:space-y-0">
      <div className="h-32 w-32 bg-gray-400" />
      <div className="flex w-full flex-col items-center space-y-3 md:max-w-lg md:items-start">
        <div className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-3">
          <h3 className="text-xl font-medium">Project title</h3>
          <div className="flex space-x-3">
            <ProjectLabel />
            <ProjectLabel />
            <ProjectLabel />
          </div>
        </div>
        <p className="w-full opacity-70">Project description</p>
      </div>
    </div>
  )
}

const ProjectLabel = () => {
  return (
    <div className="rounded-md bg-purple-600 px-3 py-1 text-xs font-bold">
      Figma
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

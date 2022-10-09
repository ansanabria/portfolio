import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="relative mb-16 mt-4 w-full text-center">
      <Link href="/">
        <a className="text-xl font-bold">A. Sanabria</a>
      </Link>
      <a
        href="https://drive.google.com/file/d/17GrzgimnMeaFP7sfPnHsVZpmZdJtBkRJ/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-0 right-0 font-medium transition-opacity hover:opacity-70"
      >
        CV
      </a>
    </nav>
  )
}

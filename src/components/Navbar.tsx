import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="relative mb-16 mt-4 w-full text-center">
      <Link href="/">
        <a className="text-xl font-bold">A. Sanabria</a>
      </Link>
    </nav>
  )
}

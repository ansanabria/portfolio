import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="mb-16 w-full py-3 text-center">
      <Link href="/">
        <a className="text-xl font-bold">A. Sanabria</a>
      </Link>
    </nav>
  )
}

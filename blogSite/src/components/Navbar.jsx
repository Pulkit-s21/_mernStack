import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faX } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
  let pages = [
    { name: "home", link: "/" },
    { name: "about us", link: "/about" },
    { name: "create", link: "/create" },
  ]

  let [open, setOpen] = useState(true)

  function toggleNavbar() {
    setOpen(!open)
  }

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 text-black">
      <div className="md:flex items-center justify-between bg-white p-4">
        <div>
          <h2 className="text-3xl font-bold">Blog Buddy</h2>
        </div>
        <div
          onClick={toggleNavbar}
          className="text-2xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {open ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <ul
          className={`flex flex-col md:flex-row md:items-center gap-4 md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all ease-in md:top-0 top-16 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          {pages.map((page, idx) => {
            return (
              <li key={idx}>
                <Link
                  to={page.link}
                  className="capitalize text-neutral-800 text-xl hover:text-neutral-400 transition-all"
                >
                  {page.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

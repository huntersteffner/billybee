import { useState } from "react"
import Logo from "../assets/img/logo.png"
import Image from "next/image"
import { Squash as Hamburger } from 'hamburger-react'
import Link from "next/link"

const Navbar = () => {
    // https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/react/navbars
    const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <>
      <nav className="relative flex flex-col flex-wrap items-center justify-between px-2 py-3 bg-[#002247] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white"
              href="/"
            >
                {/* Go to https://hamburger-react.netlify.app/ for information on hamburger menu */}
                <Image src={Logo} alt="billy bee logo" />
              Billy Bee Kid's Fishing
            </Link>
            <button>
            {/* //   className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            //   type="button"
            //   onClick={() => setNavbarOpen(!navbarOpen)}
            // >
            //   <i className="fas fa-bars"></i> */}
            <Hamburger color="#fff"  toggled={navbarOpen} toggle={setNavbarOpen} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/photos"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Photos</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/recommendations"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Local Recommendations</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Phone Number */}
        <div>
            <a className="text-3xl" href="tel:9122699983">912-269-9983</a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
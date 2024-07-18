import { Navbar } from "flowbite-react";
import PrimaryButton from "./ButtonPrimary";
import { useLocation } from "react-router-dom";

export function NavbarComponent() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Marketing</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <PrimaryButton text="Get Started" />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/marketing"
          className={`nav-link hover:text-red-500 ${isActive("/marketing") ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700"}`}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/marketing-about"
          className={`hover:text-red-500 ${isActive("/marketing-about") ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700"}`}
        >
          About
        </Navbar.Link>
        <Navbar.Link
          href="/marketing-service"
          className={`hover:text-red-500 ${isActive("/marketing-service") ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700"}`}
        >
          Service
        </Navbar.Link>
        <Navbar.Link
          href="/marketing-blog"
          className={`hover:text-red-500 ${isActive("/marketing-blog") ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700"}`}
        >
          Blog
        </Navbar.Link>
        <Navbar.Link
          href="/marketing-contact"
          className={`hover:text-red-500 ${isActive("/marketing-contact") ? "text-red-500 font-bold border-b-2 border-red-500" : "text-gray-700"}`}
        >
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


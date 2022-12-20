import { useState } from "react";
import { Link } from "react-scroll";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as CrossIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDrawer() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header name="home">
      <div className="relative w-full overflow-hidden">
        <img
          className="h-[40%] md:h-auto absolute top-0 left-0 right-0 bottom-0 object-cover w-full z-[-1]"
          src="/img/Background.png"
        />

        <div className="lg:max-w-5xl lg:mx-auto mx-5 py-7 flex items-center justify-between">
          <button
            className="lg:hidden"
            onClick={toggleDrawer}
          >
            {isOpen ? (
              <CrossIcon className="h-12 w-12 text-blue-900" />
            ) : (
              <MenuIcon className="h-12 w-12 text-blue-900" />
            )}
          </button>

          <div className="lg:hidden">
            <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
              <div className="flex flex-col space-y-6 pt-10 px-5">
                <Link className="link" to="home" smooth duration={500}>
                  Home
                </Link>
                <Link className="link" to="about" smooth duration={500}>
                  About
                </Link>
                <Link className="link" to="reviews" smooth duration={500}>
                  User Reviews
                </Link>
              </div>
            </Drawer>
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            <Link
              className="text-white cursor-pointer"
              to="home"
              smooth
              duration={500}
            >
              Home
            </Link>
            <Link
              className="text-white cursor-pointer"
              to="about"
              smooth
              duration={500}
            >
              About
            </Link>
            <Link
              className="text-white cursor-pointer"
              to="reviews"
              smooth
              duration={500}
            >
              User Reviews
            </Link>
          </div>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white md:-ml-36">
            SuccessAirlines
          </h1>

          <Link to="/contact">
            <button className="md:px-4 px-2 py-1 md:py-2 bg-white rounded-md text-blue-500 text-sm md:text-base ml-2 md:ml-0 whitespace-nowrap">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="text-md md:text-2xl text-white text-center font-bold leading-7 tracking-[0.39rem] lg:mt-8 font-iowan">
          <p>TEACHES YOUR KIDS</p>
          <p>CAREERS AND LIFE SKILLS</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <img className="w-96 md:-mr-20 md:-mb-44" src="./img/1.png" alt="" />
          <img className="w-96 md:mt-11" src="./img/2.png" alt="" />
          <img className="w-96 md:-ml-20 md:-mb-44" src="./img/3.png" alt="" />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-28 max-w-fit mx-auto lg:mt-24">
          <a href="https://apps.apple.com/us/app/success-airlines/id1626827609?platform=iphone">
            <img className="w-52 md:w-64" src="/img/App Store.png" alt="" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.kridin.successairlines&hl=en&gl=US">
            <img className="w-52 md:w-64" src="/img/Google Play.png" alt="" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

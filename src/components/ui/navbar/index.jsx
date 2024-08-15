import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../../";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full flex transition-all ease-in duration-300 justify-center items-center z-[999] fixed left-0 right-0 ${
        scrolled ? "bg-white text-secondary animate-fade" : ""
      }`}
    >
      <div className="conainer  px-10 lg:px-24 md:contaner mx-auto top-0 flex h-12 w-full items-center justify-between transition-all duration-300 ease-out md:top-0 md:h-14 md:gap-3 lg:h-20 xl:gap-0">
        <Link
          to="/"
          className="font-semibold text-lg lg:text-3xl text-[#3745c0]"
        >
          {!scrolled ? <img src="/logowhite.png" className="md:w-[80px] w-[60px]" alt="ets" /> : <img src="/logo2.png" className="md:w-[80px] w-[60px]" alt="ets" />}
        </Link>
        <div className={`hidden items-center justify-center font-semibold md:flex md:space-x-10 md:text-xs lg:space-x-10 lg:text-base ${scrolled ? 'text-secondary' : 'text-primary'}`}>
          <NavLink to="#">Events</NavLink>
          <NavLink to="#">Support us</NavLink>
          <NavLink to="#">Contact us</NavLink>{" "}
          <Link to="#">
            <Button
              children="Join ETS"
              className={`text-nowrap font-semibold ease-in-out md:!px-[10px] md:!py-[8px] md:text-xs lg:!px-[20px] lg:!py-[10px] xl:text-base `}
            />
          </Link>
        </div>

        <div className="block cursor-pointer md:hidden">
          <GiHamburgerMenu color={`${!scrolled ? '#ffffff' : '#000000'}`} onClick={() => setToggleMenu(true)} />
        </div>
      </div>
      {toggleMenu && (
        <div className="animate-slideBottom fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-20 overflow-hidden bg-primary px-6 pt-6 transition-all duration-150">
          <div className="flex w-full items-center overflow-hidden justify-between">
            <Link
              to="#"
              className="font-semibold text-lg lg:text-3xl text-[#3745c0]"
            >
               <img src="/logo2.png" className="md:w-[80px] w-[60px]" alt="ets" />
            </Link>

            <span
              className="right-6  top-5 cursor-pointer text-2xl"
              onClick={() => setToggleMenu(false)}
            >
              X
            </span>
          </div>
          <ul className="w-full list-none">
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link to="#" className=" text-lg font-normal text-lightgray">
                  Home
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link to="#" className=" text-lg font-normal text-lightgray">
                  About Us
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link to="#" className="text-lgfont-normal text-lightgray">
                  Business
                </Link>
              </div>
            </li>
            <li className="mt-12 cursor-pointer text-xl text-primary">
              <div className="flex items-center justify-center">
                <Link to="#" className="text-lg font-normal text-lightgray">
                  Company
                </Link>
              </div>
            </li>
          </ul>
          <div className="mt-20 flex w-full flex-col items-center space-y-6 text-base">
            <Link to="/prototype/signup" className="mx-auto w-[100%]">
              <Button
                className="w-full !text-base font-semibold text-primary hover:scale-95"
                children="Sign up"
                border={"none"}
                padding={"15px 30px"}
              >Join Community</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

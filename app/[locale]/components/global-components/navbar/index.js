"use client";
import React, { useState } from "react";
import Link from "next/link";
import navbarData from "./navbarData";
// import Button from "../button";
import Hamburger from "../hamburger";
import { usePathname, useSearchParams } from "next/navigation";
import Logo from "../Logo";

const Navbar = ({ isActive, start, about, projects, news, contact }) => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuActive(false);
  };

  return (
    <div className="text-xl antialiased fixed w-screen h-28 flex justify-between items-center px-10 lg:px-16 py-4 bg-darkGray top-0 left-0 z-50 border-y-4 border-white">
      <Logo closeMobileMenu={closeMobileMenu} />
      <div className="pl-16 w-full flex justify-end content-center items-center gap-6">
        <ul
          className={
            isMobileMenuActive
              ? " list-none absolute z-40 w-screen top-full left-0 bg-gray-50 py-4 flex flex-col justify-center align-center items-center gap-10 lg:static lg:flex-row"
              : " list-none flex-col justify-center align-center items-center gap-10 lg:flex-row my-4 hidden lg:flex lg:justify-end ml-4"
          }
        >
          <li
            onClick={closeMobileMenu}
            className="text-lg text-white hover:text-slate-500 cursor-pointer"
          >
            <Link href="/" className={`${isActive && "text-primaryGreen"}`}>
              {start}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg text-white hover:text-slate-500 cursor-pointer"
          >
            <Link href="/" className={`${isActive && "text-primaryGreen"}`}>
              {about}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg text-white hover:text-slate-500 cursor-pointer"
          >
            <Link href="/" className={`${isActive && "text-primaryGreen"}`}>
              {projects}
            </Link>
          </li>

          <li
            onClick={closeMobileMenu}
            className="text-lg text-white hover:text-slate-500 cursor-pointer"
          >
            <Link href="/" className={`${isActive && "text-primaryGreen"}`}>
              {news}
            </Link>
          </li>
          <li
            onClick={closeMobileMenu}
            className="text-lg text-white hover:text-slate-500 cursor-pointer"
          >
            <Link href="/" className={`${isActive && "text-primaryGreen"}`}>
              {contact}
            </Link>
          </li>

          {/* {navbarData.map((nav) => {
            const isActive = pathname === nav.path;

            return (
              <li
                onClick={closeMobileMenu}
                key={nav.id}
                className={`${
                  nav.button ? "text-base" : "text-lg"
                } text-white hover:text-slate-900 cursor-pointer ${
                  isActive && "text-primaryGreen"
                }}`}
              >
                <Link
                  href={nav.path}
                  className={`${isActive && "text-primaryGreen"}`}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul> */}
        </ul>
        <Hamburger
          hasCloseIcon={isMobileMenuActive ? true : false}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;

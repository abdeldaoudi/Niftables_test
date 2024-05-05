'use client'
import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";


export default function Screen1(props) {
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${props.satoshiRegular.className} p-1 mt-6 font-normal`}
      >
        <a href="#" className="flex items-center">
          Creon Pass
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${props.satoshiRegular.className} p-1 font-normal`}
      >
        <Chip color="lightBlue"
          className="right-[-2rem] bottom-[-0.5rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text" value="soon" />
        <a href="#" className="flex items-center">
          Token
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${props.satoshiRegular.className} p-1 font-normal`}
      >
        <Chip color="lightBlue"
          className="right-[-4rem] bottom-[-0.5rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text" value="soon" />
        <a href="#" className="flex items-center">
          AI Revenue
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`${props.satoshiRegular.className} p-1 font-normal`}
      >
        <Chip color="lightBlue"
          className="right-[-5rem] bottom-[-0.5rem] font-medium bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text" value="soon" />
        <a href="#" className="flex items-center">
          AI Launchpad
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="relative bg-cover bg-center" >
      <div className="absolute inset-0 w-full h-full inset-0 bg-gradient-to-b from-purple-600 via-indigo-600 to-black opacity-90"></div>
      <img
        src="/bg_screen1.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      {/* <img
        src="/bg_linear_1.png"
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      /> */}
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-0.5 lg:px-8 lg:py-1">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div
            className="mr-4 cursor-pointer"
          >
            <img src='/Logo.png' className="py-4" />
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="outlined"
                size="sm"
                className="relative overflow-hidden text-white-500 rounded-md  px-4 py-1 mt-7 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
              >
                <span className={`${props.satoshiRegular.className}`}>
                  Connect
                </span>

              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
      <div className="mx-auto max-h-screen-md py-1 md:px-[10rem]">
        <Card className="mb-0.5 w-full">
          <div
            className="md:h-[36rem] w-full object-cover object-center md:pt-[20rem] pt-[10rem]"
          >
            <Typography
              className={`${props.MonumentExtended.className} big-text lg:w-5/6`}
            >
              THE WORLD'S FIRST
              PLATFORM FOR TOKENIZING AI BLOCKCHAIN PROJECTS
            </Typography>
            <Chip variant="ghost" className={`${props.satoshiRegular.className} text-3xl w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-black text-transparent bg-clip-text `} value="Hold the Creon Pass NFT and earn passive income from AI Tools">
            </Chip>
          </div>
        </Card>
      </div>
    </div>
  );
}
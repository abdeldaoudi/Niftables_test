'use client'
import React, { useState, useEffect, FC } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Image from "next/image";


const CreonPass: FC = (props: any) => {
  return (
    <div className="md:flex mx-auto  lg:px-[10rem]">
      <div className="md:flex-1 px-8 lg:py-[10rem]">
        <Typography
          className={`${props.MonumentExtended.className} big-text w-full py-[1rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          CREON PASS NFT
        </Typography>
        <span
          className={`${props.satoshiBold.className} text-xl w-full bg-gradient-to-r from-indigo-500 via-indigo-800 to-purple-600 text-transparent bg-clip-text`}
        >
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools
        </span>
        <br/>
        <Typography
          className={`${props.satoshiRegular.className} text-md pl-[1rem] pt-[2rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
         Pre-launch investment opportunities for upcoming AI projects
        </Typography> 
        <Typography
          className={`${props.satoshiRegular.className} text-md pl-[1rem] pt-[2rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
         Free and early access to Creon built AI projects
        </Typography> 
        <Typography
          className={`${props.satoshiRegular.className} text-md pl-[1rem] pt-[2rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
         Higher allocation limits on the Creon AI Launchpad
        </Typography> 
        <Typography
          className={`${props.satoshiRegular.className} text-md pl-[1rem] pt-[2rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
        Revenue share distribution from Creon built AI projects
        </Typography> 

        <Button
          variant="text"
          size="sm"
          className="relative mt-[5rem] w-2/3 w-full overflow-hidden text-white-500 rounded-md  px-2 py-4 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:border-blue-500 hover:bg-blue-500 hover:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <span className="">
                Buy creon Pass
                </span>

              </Button>
      </div>
      <div className="md:flex-1 p-8 lg:py-[12rem]">
      {/* <img
        src="/CreonPass.png"
        alt="Background"
        className="flex inset-0 w-full h-full object-cover"
      /> */}
      <Image
         src="/creon_pass.png"
         alt="crownpass"
         className="flex inset-0 w-full h-full object-cover"
         width={550}
         height={550}
      />
      </div>
    </div>

  )
};
export default CreonPass;
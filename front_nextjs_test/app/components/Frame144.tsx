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



export default function Frame144(props) {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
        <div className="">
          <div className="lg:flex  mx-auto lg:px-[12rem] lg:py-[2rem]">
            <div className="md:flex-6 md:pr-[2rem]">
              <Typography
                className={`${props.MonumentExtended.className} text-3xl md:w-full pb-[1rem]`}
              >
                AI PROSPECTS, MARKET SIZE, AND DEVELOPMENT PACE
              </Typography>
              <Typography
                variant="paragraph"
                className={`${props.satoshiRegular.className} font-normal md:w-full `}
              >
                The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.
              </Typography>
            </div>
            <div className="md:flex-4 w-full">
              <img
                src="/frame_1.png"
                alt="Background"
                className="flex inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:flex mx-auto lg:px-[12rem]">
            <div className="md:flex-6  md:pr-[2rem]">
              <Typography
                 className={`${props.MonumentExtended.className} text-3xl md:w-full pb-[1rem]`}
              >
               AI Tools and Market
              </Typography>
              <Typography
                variant="paragraph"
                className={`${props.satoshiRegular.className} font-normal md:w-full `}
              >
                AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.
              </Typography>
            </div>
            <div className="md:flex-4 w-full">
              <img
                src="/frame_2.png"
                alt="Background"
                className="flex inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:flex mx-auto lg:px-[12rem] lg:py-[2rem]">
            <div className="md:flex-6 md:pr-[2rem]">
              <Typography
                  className={`${props.MonumentExtended.className} text-3xl md:w-full pb-[1rem]`}
              >
                AI, Crypto, and NFT Market
              </Typography>
              <Typography
                variant="paragraph"
                className={`${props.satoshiRegular.className} font-normal md:w-full `}
              >
                The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.
              </Typography>
            </div>
            <div className="md:flex-4 w-full">
              <img
                src="/frame_3.png"
                alt="Background"
                className="flex inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
  );
}
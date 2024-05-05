'use client'
import React, { FC } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
} from "@material-tailwind/react";
import Image from "next/image";


const Profiting: FC = (props: any) => {
    return (
        <>
            <div className="flex mx-auto w-full md:px-[12rem]">
                <Typography
                    className={`${props.MonumentExtended.className} big-text md:w-full md:pt-[2rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                    PROFITING THROUGH
                </Typography>
            </div>
            <div className="flex mx-auto  md:px-[40rem] w-full">
                <Typography
                    className={`${props.MonumentExtended.className} text-3xl md:w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                    AI INNOVATION & DECENTRALIZATION
                </Typography>
            </div>
            <div className="md:flex mx-auto  md:px-[10rem]">
                <div className="md:flex-2 md:w-3/4 px-8 md:py-[4rem]">
                    {/* <img
                        src="/profiting_image.png"
                        alt="Background"
                        className="inset-0 w-full h-auto object-cover"
                    /> */}
                    <Image
                        src="/profiting_image.png"
                        className="inset-0 w-full h-auto object-cover"
                        alt="profiting"
                        width={550}
                        height={550}
                    />
                </div>
                <div className="md:flex-1 p-2 md:w-full md:py-[4rem]">
                    <Typography
                        className={`${props.satoshiBold.className} text-xl  py-[2rem]`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        The dynamic community driven business model of the future.
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className={`${props.satoshiRegular.className} md:w-full`} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.
                    </Typography>
                </div>
            </div>

        </>

    )
};
export default Profiting;
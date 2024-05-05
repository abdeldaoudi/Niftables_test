'use client'
import React, { useState, useEffect, FC } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
import { Chip } from "@material-tailwind/react";
import Image from "next/image";



const CommingSoon: FC = (props) => {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className="lg:flex mx-auto md:px-[10rem]">
                <div className="md:flex-1 px-8 md:py-[4rem]">
                    <Card className="w-auto">
                        <CardHeader floated={false} className="h-90">
                            <Chip color="lightBlue"
                                className="right-[-14rem] bottom-[-2rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text" value="Comming soon" />
                            <Typography
                                className={`${props.MonumentExtended.className} text-3xl md:w-full md:pt-[1rem]`}
                            >
                                TOKEN
                            </Typography>

                            <Typography
                                className={`${props.satoshiBold.className} text-xl md:w-full md:pb-[1rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text`}
                            >
                                The Gateway token to the world of AI
                            </Typography>
                            <Image
                                src="/token_1.png" alt="token1"
                                className="transform hover:scale-110 transition duration-300 ease-in-out"
                                width={550}
                                height={550}
                            />
                        </CardHeader>
                        <CardBody className="text-start">
                            <p variant="paragraph" color="blue-gray" className={`${props.satoshiRegular.className} m-4`}>
                                Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.
                            </p>
                        </CardBody>
                    </Card>
                </div>
                <div className="md:flex-1 px-8 md:py-[4rem]">
                    <Card className="w-auto">
                        <CardHeader floated={false} className="h-90">
                            <Chip color="lightBlue"
                                className="right-[-14rem] bottom-[-2rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text" value="Comming soon" />
                            <Typography

                                className={`${props.MonumentExtended.className} text-3xl md:w-full md:pt-[1rem]`}
                            >
                                REVENUE
                            </Typography>
                            <Typography
                                className={`${props.satoshiBold.className} text-xl md:w-full md:pb-[1rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text`}
                            >
                                Driving income and growth through decentralization
                            </Typography>
                            <Image
                                src="/token_2.png" alt="token_2"
                                className="transform hover:scale-110 transition duration-300 ease-in-out"
                                width={550}
                                height={550}
                            />
                        </CardHeader>
                        <CardBody className="text-start">
                            <p variant="paragraph" color="blue-gray" className={`${props.satoshiRegular.className} m-4`}>
                                CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.
                            </p>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <i className="fab fa-facebook" />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <i className="fab fa-twitter" />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <i className="fab fa-instagram" />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </div>
                <div className="md:flex-1 px-8 md:py-[4rem]">
                    <Card className="w-auto">
                        <CardHeader floated={false} className="h-90 ">
                            <Chip color="lightBlue"
                                className="right-[-14rem] bottom-[-2rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text" value="Comming soon" />
                            <Typography
                                className={`${props.MonumentExtended.className} text-3xl md:w-full md:pt-[1rem]`}
                            >
                                LAUNCHPAD
                            </Typography>
                            <Typography
                                className={`${props.satoshiBold.className} text-xl md:w-full md:pb-[3rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text`}
                            >
                                Driving the future of AI Innovation
                            </Typography>
                            <Image
                                src="/token_3.png" alt="token-3" 
                                className="transform hover:scale-110 transition duration-300 ease-in-out"
                                width={550}
                                height={550}
                            />
                        </CardHeader>
                        <CardBody className="text-start">
                            <p variant="paragraph" color="blue-gray" className={`${props.satoshiRegular.className} m-4`}>
                                The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.
                            </p>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <i className="fab fa-facebook" />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <i className="fab fa-twitter" />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <i className="fab fa-instagram" />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </div>

            </div>

        </>

    )
};
export default CommingSoon;
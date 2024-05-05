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
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}



const Ourmission: FC = (props) => {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <>
            <div className="max-h-screen-md md:flex mx-auto  md:px-[10rem]">
                <div className="md:flex-6 md:px-8 md:py-[4rem]">
                    <Typography
                       
                        className={`${props.MonumentExtended.className} text-3xl  md:w-full py-[1rem]`}
                    >
                        OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-indigo-800 text-transparent bg-clip-text">while prioritizing communities and democratizing profits</span>
                    </Typography>
                     <Image
                        src="/mission.png"
                        alt='mission'
                        className="flex inset-0 md:ml-[10rem] w-auto h-3/4 object-cover "
                        width={550}
                        height={550}
                    />
                </div>
                <div className="md:flex-4 p-2 md:py-[8rem]">
                    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(1)}><svg width="100" height="114" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_41_50)">
                                <path d="M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z" stroke="url(#paint0_linear_41_50)" stroke-dasharray="8 8" />
                                <path d="M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z" fill="#13171D" />
                                <path d="M54.2727 45V46.7143H56.7411L50.4545 52.3594L47.5909 49.7879L39.2797 57.2511L40.6294 58.4632L47.5909 52.212L50.4545 54.7835L58.0909 47.9263V50.1428H60V45H54.2727ZM54.2727 54.4285V69H60V54.4285H54.2727ZM46.6364 57.8572V69H52.3636V57.8572H46.6364ZM39 60.4285V69H44.7273V60.4285H39Z" fill="white" />
                            </g>
                            <defs>
                                {open === 1 && <linearGradient id="paint0_linear_41_50" x1="7.45058e-07" y1="57" x2="100" y2="57" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#3D8BFF" />
                                    <stop offset="1" stop-color="#AB23FF" />
                                </linearGradient>}

                                <clipPath id="clip0_41_50">
                                    <rect width="100" height="114" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                            <span className={`${props.satoshiBold.className}`}>Profitability and
                                Growth</span></AccordionHeader>
                        <AccordionBody className={`${props.satoshiRegular.className}`}>
                            At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.

                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                            <svg width="100" height="114" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_41_85)">

                                    <path d="M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z" stroke="url(#paint0_linear_41_85)" stroke-dasharray="8 8" />
                                    <path d="M16 41.5204C16 39.3467 17.1756 37.343 19.0731 36.2827L47.0731 20.6356C48.892 19.6192 51.108 19.6192 52.9269 20.6356L80.9269 36.2827C82.8244 37.343 84 39.3467 84 41.5204V72.4796C84 74.6533 82.8244 76.657 80.9269 77.7173L52.9269 93.3644C51.108 94.3808 48.892 94.3808 47.0731 93.3644L19.0731 77.7173C17.1756 76.657 16 74.6533 16 72.4796V41.5204Z" fill="#13171D" />
                                    <path opacity="0.1" d="M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z" fill="white" />
                                    <g clip-path="url(#clip1_41_85)">
                                        <g clip-path="url(#clip2_41_85)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0208 64.0416C52.5552 64.0416 57.0417 59.5552 57.0417 54.0208C57.0417 53.6877 57.0254 53.3585 56.9937 53.0337C55.813 52.3498 54.4418 51.9583 52.9792 51.9583C48.5494 51.9583 44.9583 55.5494 44.9583 59.9791C44.9583 61.4418 45.3498 62.813 46.0338 63.9936C46.3585 64.0254 46.6878 64.0416 47.0208 64.0416ZM43.5688 63.4312C43.1739 62.355 42.9583 61.1922 42.9583 59.9791C42.9583 54.4448 47.4448 49.9583 52.9792 49.9583C54.1923 49.9583 55.355 50.1739 56.4312 50.5688C55.0245 46.7352 51.3421 44 47.0208 44C41.4865 44 37 48.4865 37 54.0208C37 58.3421 39.7352 62.0245 43.5688 63.4312Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.0333 63.9937C45.1753 63.9098 44.3491 63.7177 43.5684 63.4312C44.9751 67.2648 48.6575 70 52.9787 70C58.5131 70 62.9996 65.5135 62.9996 59.9792C62.9996 55.658 60.2644 51.9756 56.4308 50.5688C56.7173 51.3496 56.9094 52.1758 56.9932 53.0338C59.3884 54.4212 60.9996 57.0121 60.9996 59.9792C60.9996 64.409 57.4085 68 52.9787 68C50.0116 68 47.4207 66.3889 46.0333 63.9937Z" fill="white" />
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    {open === 2 && <linearGradient id="paint0_linear_41_85" x1="7.45058e-07" y1="57" x2="100" y2="57" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3D8BFF" />
                                        <stop offset="1" stop-color="#AB23FF" />
                                    </linearGradient>}
                                    <clipPath id="clip0_41_85">
                                        <rect width="100" height="114" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1_41_85">
                                        <rect width="26" height="26" fill="white" transform="translate(37 44)" />
                                    </clipPath>
                                    <clipPath id="clip2_41_85">
                                        <rect width="26" height="26" fill="white" transform="translate(37 44)" />
                                    </clipPath>
                                </defs>
                            </svg><span className={`${props.satoshiBold.className}`}>Transparent & Fair Decentralized Earnings</span>
                        </AccordionHeader>
                        <AccordionBody className={`${props.satoshiRegular.className}`}>
                        At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                            <svg width="100" height="114" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_41_106)">
                                    <path d="M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z" stroke="url(#paint0_linear_41_106)" stroke-dasharray="8 8" />
                                    <path d="M16 41.5204C16 39.3467 17.1756 37.343 19.0731 36.2827L47.0731 20.6356C48.892 19.6192 51.108 19.6192 52.9269 20.6356L80.9269 36.2827C82.8244 37.343 84 39.3467 84 41.5204V72.4796C84 74.6533 82.8244 76.657 80.9269 77.7173L52.9269 93.3644C51.108 94.3808 48.892 94.3808 47.0731 93.3644L19.0731 77.7173C17.1756 76.657 16 74.6533 16 72.4796V41.5204Z" fill="#13171D" />
                                    <path opacity="0.1" d="M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z" fill="white" />
                                    <path d="M61.8737 45.3257C61.864 45.2782 61.8409 45.2346 61.8072 45.1998C61.7735 45.1651 61.7306 45.1406 61.6836 45.1294C58.5458 44.3616 51.2959 47.0978 47.368 51.0277C46.6674 51.7232 46.0287 52.4786 45.4592 53.2851C44.2479 53.1779 43.0367 53.2674 42.0043 53.7178C39.0916 55.001 38.2436 58.3491 38.0073 59.7893C37.9939 59.8682 37.999 59.949 38.0221 60.0256C38.0452 60.1021 38.0857 60.1722 38.1405 60.2304C38.1953 60.2887 38.2628 60.3333 38.3378 60.361C38.4127 60.3887 38.4931 60.3986 38.5725 60.3899L43.2499 59.8735C43.2532 60.2265 43.2745 60.579 43.3136 60.9298C43.3372 61.1734 43.4452 61.4011 43.619 61.5733L45.4303 63.3819C45.6025 63.5556 45.8298 63.6637 46.0732 63.6875C46.4217 63.7266 46.772 63.7479 47.1226 63.7514L46.6094 68.4271C46.6008 68.5066 46.6108 68.5869 46.6385 68.6619C46.6662 68.7369 46.7108 68.8044 46.7689 68.8592C46.8271 68.914 46.8971 68.9546 46.9735 68.9778C47.0499 69.0009 47.1307 69.0061 47.2094 68.9928C48.6457 68.7622 51.9966 67.9134 53.2711 64.998C53.7211 63.9648 53.8133 62.7583 53.7093 61.5518C54.5171 60.9818 55.2737 60.3423 55.9706 59.6408C59.9109 55.7168 62.6291 48.6223 61.8737 45.3257ZM52.0395 54.9597C51.6797 54.5998 51.4346 54.1412 51.3353 53.6419C51.2359 53.1426 51.2867 52.625 51.4813 52.1546C51.6759 51.6842 52.0055 51.2821 52.4284 50.9992C52.8513 50.7164 53.3485 50.5654 53.8572 50.5654C54.3659 50.5654 54.8631 50.7164 55.286 50.9992C55.7089 51.2821 56.0385 51.6842 56.2331 52.1546C56.4277 52.625 56.4785 53.1426 56.3791 53.6419C56.2798 54.1412 56.0347 54.5998 55.6749 54.9597C55.4363 55.1988 55.153 55.3886 54.8411 55.518C54.5292 55.6474 54.1948 55.7141 53.8572 55.7141C53.5195 55.7141 53.1852 55.6474 52.8733 55.518C52.5614 55.3886 52.2781 55.1988 52.0395 54.9597Z" fill="white" />
                                    <path d="M45.5834 64.4688C45.2837 64.7691 44.8031 64.8861 44.2246 64.9862C42.9249 65.2077 41.7772 64.0844 42.0106 62.7702C42.0998 62.272 42.3633 61.5737 42.5274 61.4096C42.5632 61.3744 42.5871 61.3289 42.5956 61.2794C42.6041 61.2299 42.5967 61.1789 42.5746 61.1338C42.5525 61.0887 42.5168 61.0517 42.4725 61.0281C42.4282 61.0045 42.3775 60.9954 42.3278 61.0022C41.601 61.0911 40.9248 61.4207 40.4069 61.9384C39.1214 63.2252 39 68 39 68C39 68 43.7768 67.8786 45.0623 66.5918C45.5816 66.0743 45.9115 65.3969 45.999 64.669C46.0192 64.4404 45.7409 64.3042 45.5834 64.4688Z" fill="white" />
                                </g>
                                <defs>
                                    {open === 3 && <linearGradient id="paint0_linear_41_106" x1="7.45058e-07" y1="57" x2="100" y2="57" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3D8BFF" />
                                        <stop offset="1" stop-color="#AB23FF" />
                                    </linearGradient>}
                                    <clipPath id="clip0_41_106">
                                        <rect width="100" height="114" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className={`${props.satoshiBold.className}`}>Launching the
                                future</span>
                        </AccordionHeader>
                        <AccordionBody className={`${props.satoshiRegular.className}`}>
                        At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                        <AccordionHeader onClick={() => handleOpen(4)}>
                            <svg width="100" height="114" viewBox="0 0 100 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_41_140)">
                                    <path d="M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z" stroke="url(#paint0_linear_41_140)" stroke-dasharray="8 8" />
                                    <path d="M16 41.5204C16 39.3467 17.1756 37.343 19.0731 36.2827L47.0731 20.6356C48.892 19.6192 51.108 19.6192 52.9269 20.6356L80.9269 36.2827C82.8244 37.343 84 39.3467 84 41.5204V72.4796C84 74.6533 82.8244 76.657 80.9269 77.7173L52.9269 93.3644C51.108 94.3808 48.892 94.3808 47.0731 93.3644L19.0731 77.7173C17.1756 76.657 16 74.6533 16 72.4796V41.5204Z" fill="#13171D" />
                                    <path opacity="0.1" d="M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z" fill="white" />
                                    <path d="M63 57C63.0002 58.1866 62.6313 59.3467 61.94 60.3334C61.2487 61.3201 60.2661 62.0892 59.1164 62.5433C57.9667 62.9974 56.7016 63.1162 55.4812 62.8847C54.2607 62.6531 53.1396 62.0816 52.2598 61.2425L52.2084 61.1895L45.9318 54.4313C45.4012 53.9346 44.7285 53.5983 43.9982 53.4648C43.2679 53.3313 42.5125 53.4065 41.8268 53.6808C41.1411 53.9552 40.5557 54.4166 40.144 55.0071C39.7323 55.5976 39.5127 56.2909 39.5127 57C39.5127 57.7091 39.7323 58.4024 40.144 58.9929C40.5557 59.5834 41.1411 60.0448 41.8268 60.3192C42.5125 60.5935 43.2679 60.6687 43.9982 60.5352C44.7285 60.4017 45.4012 60.0654 45.9318 59.5687L46.2547 59.2207C46.3643 59.1026 46.4972 59.0061 46.6458 58.9369C46.7944 58.8677 46.9559 58.8271 47.121 58.8174C47.286 58.8077 47.4515 58.8291 47.6079 58.8804C47.7643 58.9316 47.9086 59.0118 48.0326 59.1162C48.1565 59.2207 48.2576 59.3474 48.3302 59.4891C48.4028 59.6309 48.4454 59.7848 48.4555 59.9423C48.4657 60.0997 48.4433 60.2575 48.3895 60.4066C48.3357 60.5558 48.2517 60.6934 48.1421 60.8115L47.7909 61.1895L47.7395 61.2425C46.8596 62.0814 45.7386 62.6527 44.5182 62.8841C43.2979 63.1155 42.033 62.9966 40.8835 62.5425C39.7339 62.0884 38.7514 61.3195 38.0602 60.3329C37.3689 59.3464 37 58.1865 37 57C37 55.8135 37.3689 54.6536 38.0602 53.6671C38.7514 52.6805 39.7339 51.9116 40.8835 51.4575C42.033 51.0034 43.2979 50.8845 44.5182 51.1159C45.7386 51.3473 46.8596 51.9186 47.7395 52.7575L47.7909 52.8105L54.0675 59.5687C54.5981 60.0654 55.2708 60.4017 56.0011 60.5352C56.7314 60.6687 57.4868 60.5935 58.1725 60.3192C58.8581 60.0448 59.4436 59.5834 59.8553 58.9929C60.267 58.4024 60.4866 57.7091 60.4866 57C60.4866 56.2909 60.267 55.5976 59.8553 55.0071C59.4436 54.4166 58.8581 53.9552 58.1725 53.6808C57.4868 53.4065 56.7314 53.3313 56.0011 53.4648C55.2708 53.5983 54.5981 53.9346 54.0675 54.4313L53.7445 54.7793C53.635 54.8974 53.5021 54.9939 53.3535 55.0631C53.2048 55.1323 53.0434 55.1729 52.8783 55.1826C52.7132 55.1923 52.5477 55.1709 52.3913 55.1196C52.2349 55.0684 52.0906 54.9882 51.9667 54.8838C51.8428 54.7793 51.7416 54.6526 51.6691 54.5109C51.5965 54.3691 51.5539 54.2152 51.5437 54.0577C51.5335 53.9003 51.556 53.7425 51.6098 53.5934C51.6635 53.4442 51.7476 53.3066 51.8571 53.1885L52.2084 52.8105L52.2598 52.7575C53.1396 51.9184 54.2607 51.3469 55.4812 51.1153C56.7016 50.8838 57.9667 51.0026 59.1164 51.4567C60.2661 51.9108 61.2487 52.6799 61.94 53.6666C62.6313 54.6533 63.0002 55.8134 63 57Z" fill="white" />
                                </g>
                                <defs>

                                    {open === 4 && <linearGradient id="paint0_linear_41_140" x1="7.45058e-07" y1="57" x2="100" y2="57" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#3D8BFF" />
                                        <stop offset="1" stop-color="#AB23FF" />
                                    </linearGradient>}
                                    <clipPath id="clip0_41_140">
                                        <rect width="100" height="114" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className={`${props.satoshiBold.className}`}>Limitless Possibilities of AI
                                & Crypto</span>
                        </AccordionHeader>
                        <AccordionBody  className={`${props.satoshiRegular.className}`}>
                        At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </>
    )
};
export default Ourmission;
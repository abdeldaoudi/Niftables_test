import Image from "next/image";
import '../styles/tailwind.css';
import '../styles/fonts/style.css'
import React, { useState, useEffect } from "react";

import Screen1 from "./Components/Screen1";
import CreonPass from "./Components/CreonPass";
import Profiting from "./Components/Profiting";
import Ourmission from "./Components/Ourmission";
import CommingSoon from "./Components/CommingSoon";
import Frame144 from "./Components/Frame144";
import Footer from "./Components/Footer";
import localFont from 'next/font/local'

const satoshiRegular = localFont({
  src: "../public/fonts/Satoshi-Regular.woff2",
  display: 'swap',
})
const satoshiBold = localFont({
  src: "../public/fonts/Satoshi-Bold.woff2",
  display: 'swap',
})
const satoshiMeduim = localFont({
  src: "../public/fonts/Satoshi-Medium.woff2",
  display: 'swap',
})
const MonumentExtended = localFont({
  src: "../public/fonts/MonumentExtended-Regular.woff2",
  display: 'swap',
})


const fonts = {
  satoshiRegular: satoshiRegular,
  satoshiMeduim: satoshiMeduim,
  satoshiBold: satoshiBold,
  MonumentExtended: MonumentExtended,
}

export default function Home() {
  return (
    <main className="">
      <Screen1 {...fonts}/>
      <CreonPass {...fonts}/>
      <Profiting {...fonts} />
      <Ourmission {...fonts}/>
      <CommingSoon {...fonts}/>
      <Frame144 {...fonts}/>
      <Footer {...fonts}/>
    </main>
  );
}

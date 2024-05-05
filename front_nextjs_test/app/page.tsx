import Image from "next/image";
import '../styles/tailwind.css';
import '../styles/fonts/style.css'
import React, { useState, useEffect } from "react";

import Screen1 from "./components/Screen1";
import CreonPass from "./components/CreonPass";
import Profiting from "./components/Profiting";
import Ourmission from "./components/Ourmission";
import CommingSoon from "./components/CommingSoon";
import Frame144 from "./components/Frame144";
import Footer from "./components/Footer";
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

const fonts : any = {
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

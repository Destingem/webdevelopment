import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '../Components/LandingPage/Main'
import AboutUs from '../Components/LandingPage/AboutUs'
import Services from '../Components/LandingPage/Service'
import OurProjects from '../Components/LandingPage/OurProjects'
import Flow from '../Components/LandingPage/Flow'
import { NextSeo } from 'next-seo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextSeo
     description="Společně se svým týmem poskytuji profesionální vývoj webových a desktop aplikací, grafický návrh a kybernetickou bezpečnost. Specializujeme se na Next.js, React.js a další technologie. Prozkoumejte naše projekty a objevte, jak můžeme oživit váš digitální svět."
     title="Ondřej Zaplatílek: Profesionální Web Vývoj a Kybernetická Bezpečnost | Oživte Váš Digitální Svět"
    />
    <main className="flex min-h-screen flex-col items-center justify-between" style={{overflow: "hidden"}}>
     <Main />
     <Services />
     <AboutUs />
    <Flow />
     <OurProjects />
    </main>
    </>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '../Components/LandingPage/Main'
import AboutUs from '../Components/LandingPage/AboutUs'
import Services from '../Components/LandingPage/Service'
import OurProjects from '../Components/LandingPage/OurProjects'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <Main />
     <Services />
     <AboutUs />
    
     <OurProjects />
    </main>
  )
}

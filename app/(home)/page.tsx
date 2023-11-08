import Hero from '@/components/Hero'
import Image from 'next/image'
import SectionInformation from '@/components/SectionInformation'

import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero>
      </Hero>
      <SectionInformation>

      </SectionInformation>
    </div>
  )
}

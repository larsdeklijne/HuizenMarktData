import PageIntro from '@/components/PageIntro'
import SectionInformation from '@/components/SectionInformation'

export default function Home() {
  return (
    <div>
      <PageIntro containerDiv="bg-white h-100%" title="Huizen Markt Data maakt je zoektocht naar een huis makkelijker" button1="Huis kopen" button2="Huis huren" 
      href1="/kopen" href2="/huren"
      description="Op zoek naar inzicht in de Nederlandse huizenmarkt? Je bent op de juiste plek!"></PageIntro>
      <SectionInformation>
      </SectionInformation>
    </div>
  )
}

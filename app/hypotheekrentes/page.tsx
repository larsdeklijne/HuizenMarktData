"use client";

import PageIntro from "@/components/PageIntro"
import CustomTable from "@/components/CustomTable"
import { Button } from "@/components/ui/button";

const page = () => {

  const hypotheekrentesApi = async () => {
    console.log('geklikt bitch')
    await fetch('http://localhost:3000/api/hypotheekrentes')
  }

  return (
    <div>
      <PageIntro containerDiv="bg-white h-40%" title="Hypotheekrentes" button1="Huis kopen" button2="Huis huren" 
      href1="/kopen" href2="/huren"
      description="Op zoek naar de beste hypotheekrente? Wij hebben speciale deze pagina gewijd aan hypotheekrentes, waar je de nieuwste tarieven kunt vergelijken."></PageIntro>


        {/* <CustomTable></CustomTable> */}

       <Button onClick={hypotheekrentesApi} variant="outline">API call</Button>


    </div>
  )
}

export default page
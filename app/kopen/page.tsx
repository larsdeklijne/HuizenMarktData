"use client";

import PageIntro from '@/components/PageIntro';
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {

  const kopenApi = async () => {
    console.log('geklikt bitch')
    await fetch('http://localhost:3000/api/kopen')
  }

  return (
    <div>

      <PageIntro 
        containerDiv="bg-white h-40%" 
        title="Kopen" 
        button1="Hypotheekrentes" 
        button2="Huis huren" 
        href1="/hypotheekrentes" 
        href2="/huren"
      description="Als je overweegt om een huis te kopen, ben je bij ons aan het juiste adres. Ontdek alles wat je moet weten over het koopproces, van het vinden van de perfecte woning tot het onderhandelen over de prijs en het afsluiten van de deal."></PageIntro>

    <Button onClick={kopenApi} variant="outline">Funda scraper call</Button>

    </div>

    
  )
}

export default page
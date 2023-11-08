import React from 'react'


const secties = [
    { name: 'Hypotheekrentes', href: '/hypotheekrentes', text: 'Op zoek naar de beste hypotheekrente? Wij hebben speciale paginas gewijd aan hypotheekrentes, waar je de nieuwste tarieven en aanbiedingen kunt vergelijken. We geven je de tools om de juiste keuze te maken bij het financieren van je nieuwe huis.'},
    { name: 'Kopen', href: '/kopen', text: 'Wil je een woning huren in Nederland? We begrijpen hoe belangrijk het is om de juiste huurwoning te vinden. Onze website bevat informatie over beschikbare huurwoningen, huurprijzen en tips voor een soepele huurervaring.' },
    { name: 'Huren', href: '/huren', text: 'Als je overweegt om een huis te kopen, ben je bij ons aan het juiste adres. Ontdek alles wat je moet weten over het koopproces, van het vinden van de perfecte woning tot het onderhandelen over de prijs en het afsluiten van de deal.' },
  ]

const SectionInformation = (props:any) => {
  return (

    <section className="bg-indigo-300 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-indigo-600 sm:text-3xl text-2xl font-medium title-font mb-4 ">Huizen Markt Data</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900">Huizen Markt Data is jouw one-stop-bestemming voor alle informatie en trends met betrekking tot huizen in Nederland. Of je nu een toekomstige huizenkoper, huurder of investeerder bent, wij bieden de meest actuele gegevens om je te helpen weloverwogen beslissingen te nemen.</p>
            </div>
            <div className="flex flex-wrap">
                {secties.map((sectie) => (
                    <a href={sectie.href}>
                        <div className="hover:bg-white hover:border-black rounded-3xl xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 hover:border-2">
                            <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{sectie.name}</h2>
                            <p className="leading-relaxed text-base mb-4">{sectie.text}</p>
                            <a href={sectie.href} className="text-indigo-600 inline-flex items-center">Leer meer
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </a>
                ))}

            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Button</button>
        </div>
    </section>

  )
}

export default SectionInformation
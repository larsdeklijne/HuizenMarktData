import CardGrid from "@/components/CardGrid"
import Navbar from "@/components/Navbar"
import PageIntro from "@/components/PageIntro"
import CustomTable from "@/components/CustomTable"

const page = () => {
  return (
    <div>
      <PageIntro title="Hypotheekrentes" button1="Huis kopen" button2="Huis huren" 
      href1="/kopen" href2="/huren"
      description="Op zoek naar de beste hypotheekrente? Wij hebben speciale deze pagina gewijd aan hypotheekrentes, waar je de nieuwste tarieven kunt vergelijken."></PageIntro>
      <CustomTable></CustomTable>
    </div>
  )
}

export default page
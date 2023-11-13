import PageIntro from "@/components/PageIntro"
import CustomTable from "@/components/CustomTable"
import { Button } from "@/components/ui/button";

async function getData() {
  const res = await fetch('http://localhost:3000/api/hypotheekrentes')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const page = async () => {

  const data = await getData()
  const renteData = data.dataArray

  console.log("client side data:")
  console.log(data.dataArray)

  return (
    <div>
      <PageIntro containerDiv="bg-white h-40%" title="Hypotheekrentes" button1="Huis kopen" button2="Huis huren" 
      href1="/kopen" href2="/huren"
      description="Op zoek naar de beste hypotheekrente? Wij hebben speciale deze pagina gewijd aan hypotheekrentes, waar je de nieuwste tarieven kunt vergelijken."></PageIntro>
      <CustomTable renteData={renteData}></CustomTable>

    </div>
  )
}

export default page
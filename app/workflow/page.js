import { checklistItems } from "@/data"
import codeImage from "@/public/code.jpg"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide ">Accelarate your <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">codeing workflow.</span></h2>
      <div className="flex flex-wrap justify-center">
<div className="p-2 w-full lg:w-1/2">
<Image src={codeImage} alt="code"/>
</div>
<div className="pt-12 w-full lg:w-1/2">
{checklistItems.map(item=>(
    <div key={item.id} className="flex mb-12">
<div className="text-green-500 mx-6 bg-neutral-900 h-10 p-2 justify-center items-center rounded-full w-10">
<CheckCircle2/>
</div>
<div>
<h5 className="mt-1 mb-2 text-xl"> 
{item.title}
</h5>
<p className="text-md text-neutral-500">{item.description}</p>
</div>
</div>
))}
</div>
 </div>
</div>
  )
}
export default WorkFlow
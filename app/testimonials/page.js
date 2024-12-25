import { testimonials } from "@/data"
import Image from "next/image"

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">What People are saying</h2>
    <div className="flex flex-wrap justify-center">
{
    testimonials.map(item=>(
      <div key={item.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
<div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin">
<p>{item.text}</p>
<div className="flex mt-8 items-center">
<Image src={item.image} alt={item.text} className="h-12 w-12 mr-6 rounded-full border border-neutral-300 object-cover"/>
<div>
    <h6>{item.user}</h6>
    <span className="text-sm font-normal italic text-neutral-600">{item.company}</span>
</div>
</div>
</div>
</div>  
 ))
}
 </div>
 </div>
  )
}

export default Testimonials

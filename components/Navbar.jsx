'use client'

import { navItems } from "@/data"
import Logo from "@/public/logo.png"
import { Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
const Navbar = () => {

const [open,setOpen] = useState(false)
const handleToggle =()=>{
setOpen(!open)

}
  return (
   <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
<div className="container px-4 mx-auto relative text-sm">
<div className="flex justify-between items-center ">
    
<div className="flex items-center flex-shrink-0">
<Image src={Logo} alt="logo"className="h-10 w-10 mr-8"/>
<span className="text-xl tracking-tight">
VirtualR
</span>
</div>
<ul className="hidden lg:flex ml-14 space-x-12 ">

{navItems.map(item=>(
<li key={item.id}>
    <Link href={item.href}>{item.label}</Link>
</li>

))}
</ul>
<div className="hidden lg:flex justify-center space-x-12 items-center">
    <Link href={""} className="py-2 px-3 border rounded-md">Sign In</Link>
    <Link href={""} className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Create an account </Link>
</div>
<div className="lg:hidden md:flex flex-col justify-end "><button onClick={handleToggle}>
{
    open ? <X/> : <Menu/>
}
</button>

</div>
</div>
{
  open&&(
<div className="fixed right-0 z-10 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
  <ul>
    {navItems.map(item=>(
<li key={item.id} className="py-4">
  <Link href={item.href} onClick={()=>setOpen(false)}>{item.label}</Link>
</li>
))}
  </ul>
  <div className="flex space-x-6 mt-1">
<Link href={""} className="py-2 px-3 border rounded-md">Sign In</Link>
<Link href={""} className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md">Create account</Link>
  </div>

</div>

  )
}




</div>
</nav>
  )
}

export default Navbar
//design pattern
//1st step dekte hobe koyta section hbe
//jemon navbar er vitor 3ta section ace 1- logo 2- navitems 3- register section


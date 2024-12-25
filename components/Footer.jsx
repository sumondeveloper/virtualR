import { communityLinks, platformLinks, resourcesLinks } from "@/data/index"
import Link from "next/link"
const Footer = () => {
  return (
  <footer className="mt-20 border-t py-10 border-neutral-700">
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
<div>
<h3 className="text-md font-semibold mb-4">Resources</h3>
<ul className="space-y-2">
    {resourcesLinks.map(resource=>(
        <li key={resource.id}>
            <Link className="text-neutral-300 hover:text-white" href={resource.href}>{resource.text}</Link>
        </li>
    ))}
</ul>
</div>
<div>
<h3 className="text-md font-semibold mb-4">Platform</h3>
<ul className="space-y-2">
    {platformLinks.map(platform=>(
        <li key={platform.id}>
            <Link className="text-neutral-300 hover:text-white" href={platform.href}>{platform.text}</Link>
        </li>
    ))}
</ul>
</div>
<div>
<h3 className="text-md font-semibold mb-4">Community</h3>
<ul className="space-y-2">
    {communityLinks.map(community=>(
        <li key={community.id}>
            <Link className="text-neutral-300 hover:text-white" href={community.href}>{community.text}</Link>
        </li>
    ))}
</ul>
</div>
</div>
  </footer>
  )
}

export default Footer

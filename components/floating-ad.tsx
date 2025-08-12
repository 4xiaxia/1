import Image from "next/image"
import Link from "next/link"

interface FloatingAdProps {
  src: string
  alt: string
  href: string
}

export function FloatingAd({ src, alt, href }: FloatingAdProps) {
  return (
    <div className="absolute top-[61px] left-4 w-24 md:w-32 lg:w-40 z-50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <Link href={href} aria-label="广告链接" target="_blank" rel="noopener noreferrer">
        <Image src={src || "/placeholder.svg"} alt={alt} width={160} height={160} className="block w-36 h-[50px] rounded-lg shadow-none" />
      </Link>
    </div>
  )
}

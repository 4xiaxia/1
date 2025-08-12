import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils" // Import cn utility

interface MobileBannerAdProps {
  src: string
  alt: string
  href: string
  className?: string // Add className prop
}

export function MobileBannerAd({ src, alt, href, className }: MobileBannerAdProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden transition-all duration-300 hover:scale-[1.005] hover:shadow-xl text-center",
        className,
      )}
    >
      <Link href={href} aria-label="移动端广告链接" target="_blank" rel="noopener noreferrer">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={1200} // Adjusted width for banner aspect ratio
          height={44} // Set height to 44px
          className="w-full h-11 object-cover rounded-lg shadow-md" // h-11 for 44px
        />
      </Link>
    </div>
  )
}

import Image, { StaticImageData } from 'next/image'
import headerTextImage from '@/assets/images/Header-Text.png'

export function ImageHeader() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-center backdrop-blur-xl bg-gradient-to-b from-background/10 via-background/50 to-background/80">
      <Image
        src={headerTextImage as StaticImageData}
        alt="CS Campus Genie"
        width={200} // adjust as needed
        height={32} // adjust as needed
      />
    </header>
  )
}

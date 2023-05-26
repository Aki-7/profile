import Image from 'next/image'
import profileImage from '../public/profile.webp'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Image src={profileImage} alt="Picture of Akihiro Kiuchi" placeholder='blur' className="mx-auto mt-12 w-[200px]" />
      <div className="text-center mt-12">
        <h1 className="text-4xl font=bold sm:text-6xl">Akihiro Kiuchi&apos;s Profile Page</h1>
      </div>
    </main>
  )
}

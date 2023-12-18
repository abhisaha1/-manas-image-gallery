import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function GalleryPage() {
  return <>
    <div
      className="flex items-center justify-center relative bg-blend-lighten h-[calc(100vh-56px)] bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1590678389401-6af2d02e63a3?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
    >

      <div className="absolute w-full h-full opacity-10 bg-blue-400 bg-bottom" style={{ backgroundSize: "3px 3px", backgroundImage: 'radial-gradient(rgb(14, 14, 20), rgba(0, 42, 134, 0.42))' }}></div>


      <div className="text-center z-10 ">
        <h1 className="text-4xl font-bold mb-4 text-white">Hi, I&apos;m <span className="text-sky-300">Manas Parmar</span>.</h1>
        <p className="text-lg text-white m-12">An artist fueled by a passion for <span className="text-blue-400">design</span> and <span className="text-lime-500">painting</span>.<br />Explore a glimpse of my artistic journey through a curated collection of my works.</p>
        <br />
        <Link href="/all"><Button variant="default">Enter Now</Button></Link>
      </div>

    </div>
  </>
}

import Navbar from '@/components/Navbar'
import Home from '@/components/Home'
import About from '@/components/About'
import Work from '@/components/Work'
import Wardrobe from '@/components/Wardrobe'
import Connect from '@/components/Connect'

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Wardrobe />
      <Connect />
    </main>
  )
}

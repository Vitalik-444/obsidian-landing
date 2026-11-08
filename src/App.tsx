import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Cursor from './components/ui/Cursor'
import Hero from './components/sections/Hero'
import Philosophy from './components/sections/Philosophy'
import Projects from './components/sections/Projects'
import GeometryLab from './components/sections/GeometryLab'
import Studio from './components/sections/Studio'

export default function App() {
  return (
    <>
      <Cursor />
      <Navigation />
      <Hero />
      <Philosophy />
      <Projects />
      <GeometryLab />
      <Studio />
      <Footer />
    </>
  )
}

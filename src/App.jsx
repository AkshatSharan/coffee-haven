import About from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import OurProducts from "./components/OurProducts"

function App() {
  return (
    <main className="bg-blackbg">
      <Navbar />
      <Hero />
      <OurProducts />
      <About />
    </main>
  )
}

export default App

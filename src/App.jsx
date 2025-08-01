import './App.css'
import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Section1 />
    </div>
  )
}

export default App

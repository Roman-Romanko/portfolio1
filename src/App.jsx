import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Berries } from './components/Berries'

function App() {
  return (
    <main className="flex flex-col">
        <section className="min-h-screen flex flex-col">
          <Navbar />
          <Home />
        </section>
        <Berries />
    </main>
  );
}


export default App

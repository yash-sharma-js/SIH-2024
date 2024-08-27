import Navbar from "./components/Navbar.jsx"
import background from './assets/bg.jpg'
import StatBoxes1 from "./components/statistics/StatBoxes1.jsx"
import Map from "./components/Map.jsx"

function App() {


  return (
    <div className="  flex flex-col justify-center " >
      <Navbar />
      <StatBoxes1/>
      <Map/>
      
    </div>
  )
}

export default App

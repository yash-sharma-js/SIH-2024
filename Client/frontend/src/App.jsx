import Navbar from "./components/Navbar.jsx"
import background from './assets/bg.jpg'
import StatBoxes1 from "./components/statistics/StatBoxes1.jsx"
import Map from "./components/Map.jsx"
import StatBoxes2 from "./components/statistics/StatBoxes2.jsx"

function App() {


  return (
    <div className="  flex flex-col justify-center " >
      <Navbar />
      <StatBoxes1/>
      <Map/>
      <StatBoxes2/>
      
    </div>
  )
}

export default App

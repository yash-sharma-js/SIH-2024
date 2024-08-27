import Navbar from "./components/Navbar.jsx"
import background from './assets/bg.jpg'
import StatBoxes1 from "./components/statistics/StatBoxes1.jsx"
import Map from "./components/Map.jsx"
import AQIHeatMap from "./components/Aqi_Heat_Map.jsx"

function App() {


  return (
    <div className="  flex flex-col justify-center " >
      <Navbar />
      <StatBoxes1/>
      <Map/>
      <AQIHeatMap/>
      
    </div>
  )
}

export default App

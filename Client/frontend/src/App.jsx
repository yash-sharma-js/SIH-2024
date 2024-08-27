import Navbar from "./components/Navbar.jsx"
import StatBoxes1 from "./components/statistics/StatBoxes1.jsx"
import Map from "./components/Map.jsx"
import StatBoxes2 from "./components/statistics/StatBoxes2.jsx"
import AQIHeatMap from "./components/Aqi_Heat_Map.jsx"

function App() {


  return (
    <div className="  flex flex-col justify-center " >
      <Navbar className='z-50' />
      <StatBoxes1/>
      <Map/>
      <StatBoxes2/>
      <AQIHeatMap/>
    </div>
  )
}

export default App

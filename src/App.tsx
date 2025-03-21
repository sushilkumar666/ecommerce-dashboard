import './App.css'
import InfoCard from './components/Cards/InfoCard'
import Chart from './components/Chart/ChartCard'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Jai Shree Ram
      </h1>
      {/* <InfoCard title='test' value="test value" ><div>something</div></InfoCard> */}
      <Chart title='new Title'>test</Chart>
    </>
  )
}

export default App

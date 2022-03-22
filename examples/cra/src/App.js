import { Ellipsis, Ring, Ripple, Wave, Circle, Grid } from 'react-pure-spinners'
import 'react-pure-spinners/dist/style.min.css'

function App() {
  return (
    <div className="App">
      <Ellipsis color="#000" size="64" thickness="2" />
      <Ripple color="#000" size="64" thickness="2" />
      <Ring color="#000" size="64" thickness="2" />
      <Wave color="#000" size="64" thickness="2" />

      <Circle color="#000" size="64" />
      <Grid color="#000" thickness="14" />
    </div>
  )
}

export default App

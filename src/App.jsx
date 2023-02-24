import './App.css'
import Header from './components/header/Header'
import DataPerson from './components/dataPerson/DataPerson'
import Questions from './components/questions/Questions'

function App() {
  
  return (
    <div className="App">
        <Header />
        <DataPerson />
        <div className='container__title'>
          <h1 className='h1_title'>“PRUEBA TEÓRICA”</h1>
        </div>
        <Questions />
    </div>
  )
}

export default App

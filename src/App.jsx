

import './App.css'
import Balance from './components/Balance'
//import { GlobalProvider } from './components/contexts/GlobalState'
import { GlobalProvider } from './contexts/GlobalState'
import InputForm from './components/InputForm'
import Movements from './components/Movements'

function App() {
  

  return (
    <div className="App">
     <GlobalProvider>
     <Balance/>
     <Movements/>
     <InputForm/>
     </GlobalProvider>

         </div>
  )
}

export default App

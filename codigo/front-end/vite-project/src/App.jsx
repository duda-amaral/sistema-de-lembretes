import LembreteForm from './components/LembreteForm'
import LembreteList from './components/LembreteList'
import { useState } from 'react';
import './App.scss'

function App() {

  const [lembretes, setLembretes] = useState([]);

  const addLembreteToList = (novoLembrete) => {
      setLembretes([...lembretes, novoLembrete]);
  };

  return (
    <>
          <LembreteForm onAddLembrete={addLembreteToList} />
          <LembreteList lembretes={lembretes}/>
    </>
  )
}

export default App

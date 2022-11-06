import { useState } from 'react'
import './App.css'
import FruitList from './components/FruitList/FruitList'
import ResetBtn from './components/ResetBtn/ResetBtn'
import fruits from './data/fruits.json'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="App">
      <h1>Fruit Search Filter</h1>
      <main>
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="Pesquisa para filtrar"
          value={inputValue}
        />
        <ResetBtn setInputValue={setInputValue} />
        <FruitList fruits={fruits} inputValue={inputValue} />
      </main>
    </div>
  )
}

export default App

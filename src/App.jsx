import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios";
import ResidentInfo from './components/ResidentInfo';
import Locations from './components/Locations';
import rickAndMorty from './assets/images/rickAndMorty.png'
import gun from './assets/images/gun.png'

function App() {

  const [location, setLocation] = useState({});
  const [searchValue, setSearchValue] = useState("")
  const [isLoading, setIsLOading] = useState(true)

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res => {
        setLocation(res.data)
      })
      .finally(() => setIsLOading(false))
  }, [])

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchValue}`)
      .then(res => setLocation(res.data));
  }

  const zeroResidents = () => {

    if (location.residents?.length === 0)
      return (
        <div className='zeroResidents'>
          <p className='nobodyText'>There is nobody here...</p>
          <img className='gun' src={gun} alt="" />
        </div>
      )
  }


  console.log(location);

  return (
    <div className="App">
      <header>
        <img className="titleImage" src={rickAndMorty} alt="" />
        <div className="inputAndButton">
          <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="enter a location ID (1-126)" />
          <button onClick={searchLocation}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </header>
      <Locations location={location} />
      <div>
        {isLoading ?
          <div className='loading'>
            <span className="loader"></span></div> : (
            <>
              <ul className='residentsContainer'>
                {zeroResidents()}
                {location.residents?.map(residentUrl => (
                  <ResidentInfo residentUrl={residentUrl} key={residentUrl} />
                ))
                }
              </ul>
            </>
          )
        }
      </div>
    </div>
  )
}

export default App

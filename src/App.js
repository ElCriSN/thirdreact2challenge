import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Context from "./Context"

import Navbar from "./components/Navbar"

// views

import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonData from "./views/PokemonData";


function App() {
  const [pokemones, setPokemones] = useState([]);
  const globalState = { pokemones, setPokemones }

  useEffect(() => {
    consultarPokemones();
  }, []);

  const consultarPokemones = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon`
    const response = await fetch(url)
    const data = await response.json()
    setPokemones(data.results)
  }
  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemones/:name" element={<PokemonData />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;

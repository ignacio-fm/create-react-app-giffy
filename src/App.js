import React from 'react';
import ListOfGifs from './components/ListOfGifs';
import './App.css';

import { Link, Route } from "wouter"

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>¡Hola Gifs! 👋</h1>
        <p>10 Gif fantásticos de animales ✨</p>
        <small>¡Elige un animal!</small>
        <div className='App-nav'>
          <Link href="/gif/panda"><button><span>🐼</span></button></Link>
          <Link href="/gif/dog"><button><span>🐶</span></button></Link>
          <Link href="/gif/gato"><button><span>🐱</span></button></Link>
          <Link href="/gif/mono"><button><span>🐵</span></button></Link>
        </div>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  )
}

export default App;

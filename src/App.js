import React, { useState } from 'react';
import './App.css';
import ListOfGifs from './components/listOfGifs';

function App() {
  const [keyword, setKeyword] = useState('Pandas')

  return (
    <div className="App">
      <section className="App-content">
        <h1>¡Hola Gifs! 👋</h1>
        <p>10 Gif fantásticos de {keyword} ✨</p>
        <small>Cambiar de animal:</small>
        <div className='App-nav'>
          <button onClick={() => setKeyword('Monos')}><span>🐵</span></button>
          <button onClick={() => setKeyword('Pandas')}><span>🐼</span></button>
          <button onClick={() => setKeyword('Perros')}><span>🐶</span></button>
          <button onClick={() => setKeyword('Gatos')}><span>🐱</span></button>
        </div>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  )
}

export default App;

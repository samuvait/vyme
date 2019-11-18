import React, { useState } from 'react'
import Movies from './components/Movies'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className="App">
      <Movies movies={movies} setMovies={setMovies}/>
    </div>
  );
}

export default App;

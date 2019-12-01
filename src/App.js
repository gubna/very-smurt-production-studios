import React from 'react';
import ButtonAppBar from './components/AppBar.js';
import MediaCard from './components/Image.js';
import Album from './components/Card.js';
import Tube from './components/Youtube.js';
import Foot from './components/Footer.js';

function App() {
  return (
    <div className="App">
     
     <ButtonAppBar />
     <MediaCard />
      <Album />
      <Tube />
      <Foot />

    </div>
  );
}

export default App;

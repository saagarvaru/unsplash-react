import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageGrid from './components/ImageGrid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Infinite Scroll using the Unsplash API
      </header>
      {/* ImageGrid */}
      <ImageGrid/>
      {/* Hero */}

    </div>
  );
}

export default App;

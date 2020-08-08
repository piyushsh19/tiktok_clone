import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video 
          url = ""
          channel="@piyushsh19"
          description="The sunshine"
          songs="the eve"
          likes={123}
          messages={400}
          shares={22}
        />
        <Video 
        url = ""
        channel="@shsh19"
        description="Cool its "
        songs="the eve"
        likes={1443}
        messages={50}
        shares={41}
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;

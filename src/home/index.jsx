import { useState } from 'react';
import './index.css';

const App = () => {
  const height = window.innerHeight;
  const [endLocation, setEndLoaction] = useState('');
  
  return (
    <section className="App" style={{ height: height }}>
      <div className='title'>
        PARKING JUST GET A LOT FASTER
      </div>
      <div className='search-input'>
        <input type='text' value={endLocation}/>
        <button onClick={() => {}}>
          
        </button>
      </div>
    </section>
  );
}

export default App;

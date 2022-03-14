import { Input } from 'antd';
import { useState } from 'react';
import './index.less';

const { Search } = Input;

const App = () => {
  const height = window.innerHeight;
  const [currentLocal, setCurrentLocal] = useState('');
  return (
    <section className="App" style={{ height: height }}>
      <div className='homePage-title'>
        PARKING JUST GET A LOT FASTER
      </div>
      <div className='homepage-search'>
        <Search
          allowClear
          placeholder='Search Place, Postal Codes or District'
          enterButton="Search"
          value={currentLocal}
          size='large'
          onChange={setCurrentLocal}
        />
      </div>
      <div>

      </div>
    </section>
  );
}

export default App;

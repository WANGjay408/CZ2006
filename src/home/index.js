import { Input } from 'antd';
import './index.css';

const App = () => {
  const height = window.innerHeight;

  return (
    <section className="App" style={{ height: height }}>
      <div className='homePage-title'>
        PARKING JUST GET A LOT FASTER
      </div>
      <div>
        <Input />
      </div>
      <div>

      </div>
    </section>
  );
}

export default App;

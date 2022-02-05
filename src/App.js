import './App.css';
import Heading from './layout/Heading';
import SideBar from './layout/SideBar';
import style from '../src/style/style.css'
import CatImages from './Components/CatImages';

function App() {
  return (
    <div >
      <Heading />
      <div className='mainContainer'>
        <SideBar />
        <CatImages />
      </div>

    </div>
  );
}

export default App;

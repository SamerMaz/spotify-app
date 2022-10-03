import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <div >
     <Routes>
        <Route path="/" element={ <Login/> } />
        {/* <Route path="" element={ </> } />
        <Route path="" element={ </> } /> */}
      </Routes>
    </div>
  );
}

export default App;

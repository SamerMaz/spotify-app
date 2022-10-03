import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArtistSearch from './pages/ArtistSearch';
import Login from './pages/Login';

function App() {
  return (
    <div >
     <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/artist-search" element={ <ArtistSearch/> } />
        {/* // <Route path="" element={ </> } /> */}
      </Routes>
    </div>
  );
}

export default App;


import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RankingA from './pages/RankingA';
import RankingW from './pages/RankingW';
import News from './pages/News';
import Player from './pages/Player';
import PlayerW from './pages/PlayerW';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rankingAtp" element={<RankingA />} />
        <Route path="/rankingWta" element={<RankingW />} />
        <Route path="/news" element={<News />} />
        <Route path="/rankingAtp/:name" element={<Player />}/>
        <Route path="/rankingWta/:name" element={<PlayerW />}/>

      </Routes>
    </div>
  );
}

export default App;

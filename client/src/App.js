import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Subscribe from './pages/Subscribe';
import Watch from './pages/Watch';
import Watchlist from './pages/Watchlist';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/watch" element={<Watch/>}/>
          <Route path="/subscribe" element={<Subscribe/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

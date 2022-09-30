import './App.css';
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shipdetail from './components/Shipdetail/Shipdetail.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js'

function App() {
  return (
    <div>
      <div className='stars stars2 stars3'></div>

      <div className='container'>

        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/detail/:id" element={<Shipdetail />}></Route>
          </Routes>
        </Router>
      </div>
    </div>

  );
}

export default App;

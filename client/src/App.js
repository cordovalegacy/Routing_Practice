import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/home';
import Params from './components/params';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to='/home'>Go to Home Page</Link> | <Link to='/params'>Go to Params Page</Link>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:numOrGreeting' element={<Params />}/>
        <Route path='/:numOrGreeting' element={<Params />}/>
        <Route path='/:numOrGreeting/:colorOne/:colorTwo' element={<Params />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import LockedScreen from './components/LockedScreen/LockedScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Emergency from './components/Emergency/Emergency';

function App() {
  return (
    <div className = "app">
      <div className = "app_top">
        <span className = "app_top_round"></span>
        <span className = "app_top_round"></span>
        <span className = "app_top_flat"></span>
        <span className = "app_top_round"></span>
      </div>
      <div className = "container">
        <Router>
          <Routes>
            <Route path = "/" element = {<LockedScreen />} />
            <Route path = "/emergency" element = {<Emergency />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

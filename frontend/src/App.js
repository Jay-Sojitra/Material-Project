import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultLayout from './components/DefaultLayout';
import Home from './components/Home';


function App() {
  return (
    <Router>
      {/* <DefaultLayout /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

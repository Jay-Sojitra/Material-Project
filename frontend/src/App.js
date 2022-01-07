import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/layout/header/Header';




function App() {


  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        
      </Router>

    </div>
  );

}

export default App;
// 

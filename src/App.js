import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { Skills } from './pages/Skills';
import { Challenges } from './pages/Challenges';
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/challenges" element={<Challenges />} />
              <Route path="*" element={<h1 className='flex flex-col items-center text-white'> Page Not Found</h1>} />
            </Routes>
          <Footer />
        </Router>
    </div>  
  );
}

export default App;

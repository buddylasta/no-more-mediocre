import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Workouts } from './pages/Workouts';
import { Skills } from './pages/Skills';
import { Challenges } from './pages/Challenges';
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const client = new QueryClient({})
  return (
    <div className="App">
      <QueryClientProvider client={client} >
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="*" element={<h1 className='flex flex-col items-center text-white'> Page Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>  
  );
}

export default App;

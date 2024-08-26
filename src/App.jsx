import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Story from './pages/Story';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Journey from './pages/Journey';

function App() {
  return (
    <Router>
      <div className="App app-container">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/home3" element={<Home3 />} />
            <Route path="/our-story" element={<Story />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Highlights from './components/Highlights';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Company from './components/about/Company';
import Team from './components/about/Team';
import Impact from './components/Impact'; // Make sure to create this component
import Technology from './components/Technology';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          {/* Home route with all components */}
          <Route path="/" element={
            <>
              <Banner />
              <Highlights />
              <About />
              <Projects />
              <Services />
              <Contact />
            </>
          } />
          
          {/* Company information route */}
          <Route path="/about/company" element={<Company />} />
          <Route path="/about/team" element={<Team />} />
          
          {/* Impact route */}
          <Route path="/impact" element={<Impact />} />
          <Route path="/technology" element={<Technology />} />
          
          {/* You can add more routes here as needed */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
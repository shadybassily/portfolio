import './App.css';
import Hero from './components/hero/Hero.component';
import Navbar from './components/navbar/Navbar.component';

function App() {
  return (
   <div className='parent-container'>
    <Navbar />
    <Hero />
   </div>
  );
}

export default App;

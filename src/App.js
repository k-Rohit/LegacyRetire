import './App.css';
import Hero from './components/Hero/Hero';
import Learn from './components/Learn/Learn';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Hero/>
       <Learn/>
    </div>
  );
}

export default App;

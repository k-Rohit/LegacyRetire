import './App.css';
import ChatBot from './components/ChatBot/ChatBot';
import ChatBotIntegration from './components/ChatBotIntegration';
import Hero from './components/Hero/Hero';
import Learn from './components/Learn/Learn';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Hero/>
       <Learn/>
       <ChatBot/>
       <ChatBotIntegration/>
    </div>
  );
}

export default App;

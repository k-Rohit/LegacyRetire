import './App.css';
import ChatBot from './components/ChatBot/ChatBot';
import ChatBotIntegration from './components/ChatBotIntegration';
import Hero from './components/Hero/Hero';
import Learn from './components/Learn/Learn';
import NavBar from './components/NavBar/NavBar';
import Resource from './components/Resource/Resource';
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Hero/>
       <Learn/>
       <ChatBot/>
       <ChatBotIntegration/>
       {/* <Resource/> */}
       {/* <Learn/> */}
    </div>
  );
}

export default App;



// function Home() {
//   return (
//     <div>
//       <NavBar />
//       <Hero />
//       <Learn />
//       <ChatBot />
//       <ChatBotIntegration />
//       <Resource />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" exact component={Home} />
//       <Route path="/learn" component={Learn} />
//       <Route path="/chatbot" component={ChatBot} />
//       {/* <Route path="/account" component={Account} /> */}
//       </Routes>
//   );
// }

// export default App;
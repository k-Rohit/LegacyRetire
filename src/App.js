import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatApplication from './components/ChatApplication/ChatApplication';
import ChatBot from './components/ChatBot/ChatBot';
import ChatBotIntegration from './components/ChatBotIntegration';
import DocumentVault from './components/DocVault/DocumentVault';
import Hero from './components/Hero/Hero';
import Learn from './components/Learn/Learn';
import NavBar from './components/NavBar/NavBar';
import Recommendation from './components/Recommendation/Recommendation';
import RecommendationInfo from './components/Recommendation/RecommendationInfo';
import Resource from './components/Resource/Resource';
import Operation from './components/StockRecommendation/Operation';
import StockRecommendation from './components/StockRecommendation/StockRecommendation';

function HomeComponent() {
  return (
    <div>
      <Hero/>
      <Learn/>
      <ChatBot/>
      {/* <ChatBotIntegration/> */}
      <RecommendationInfo/>
      <StockRecommendation/>
     {/* <DocumentVault/> */}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/bot" element={<ChatApplication />} />
        <Route path="/recommend" element={<Recommendation />} />
        <Route path="/resource" element={<Resource />}/>
        <Route path="/stock" element={<Operation/>}/>
      </Routes>
    </div>
  );
}

export default App;

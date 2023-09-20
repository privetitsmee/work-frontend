import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import WhatIDo from './Components/WhatIDo/WhatIDo';
import Footer from './Components/Footer/Footer';


function App() {

  const titleText = {
    name: `Привет я - Frontend разработчик:\nВаши Идеи, Мой Code`,
    descr: `Я создаю современные и креативные веб-сайты с удивительным пользовательским опытом. Специализируюсь на разработке интерфейсов, которые не только красивы, но и функциональны.`
  }

  return (
    <div className="App">
        <Navigation name={titleText.name} descr={titleText.descr}/>
        <About/>
        <Skills/>
        <WhatIDo/>
        <Footer/>
        
    </div>
  );
}

export default App;

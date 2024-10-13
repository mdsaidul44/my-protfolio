// eslint-disable-next-line no-unused-vars
import React from 'react';  
import Name from './component/Name'; 
import Work from './component/Work';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Education from './component/Education';
import Contact from './component/Contact';
import Footer from './component/Footer';

const Home = () => {
    return (
        <div> 
           <Name></Name>
           <Work></Work>
           <Skills></Skills>
           <Projects></Projects>
           <Education></Education>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;
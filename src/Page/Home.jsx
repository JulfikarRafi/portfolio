import React from 'react';
import Designation from '../components/Designation';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            
            <Designation></Designation>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;
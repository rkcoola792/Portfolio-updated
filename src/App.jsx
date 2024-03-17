import './App.css'
import "./app.scss";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallex from "./components/Parallex/Parallex";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Test from "./components/Test/Test";

const App = () => {
  return (
    <div className=''>
      <Cursor></Cursor>
      <section id="Homepage">
        <Navbar />
        <Hero></Hero>
      </section>
      <section id="Services" className='h-svh mt-6 '>
        <Parallex type="services" />
      </section>

      <section><Services></Services></section>
      <section id="Portfolio " className='h-svh'>
        <Parallex type="portfolio" />
      </section>
     <Portfolio></Portfolio>
      <section id="Contact" className=' h-svh'><Contact/></section> 
      
      
    </div>
  );
};

export default App;

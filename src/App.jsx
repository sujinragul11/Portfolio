import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import WhyHireMe from './components/WhyHireMe';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Experience />
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WordPressExcellence from './components/WordPressExcellence';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Insights from './components/Insights';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WordPressExcellence />
        <Projects />
        <Testimonials />
        <Insights />
        <Contact />
      </main>
    </div>
  );
}

export default App;

import './App.scss';
import {Navbar, Header, Information, About, Contact, Skills, Work} from './components/index';
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Information />
      <Work />
      <About />
      <Skills />
      <Contact />      
    </div>
  );
}

export default App;

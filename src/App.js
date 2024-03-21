// import logo from './logo.svg';
import './App.css';
// import About from './components/about';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ThankYou from './pages/thank-you';
import Index from './pages';
import Services from './pages/services';
import About from './pages/about';
import Portfolio from './pages/portfolio';
// import Bloge from './pages/blog';
import Contact from './pages/contact';
import Head1 from './pages/header';



function App() {
  return (
    <div className="App">
      <Head1/>
     <Router>
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/index.html' element={<Index/>}></Route>
        <Route path='/about.html' element={<About/>}></Route>
        <Route path='/thankyou' element={<ThankYou/>}></Route>
        <Route path='/services.html' element={<Services/>}></Route>
        <Route path='/portfolio.html' element={<Portfolio/>}></Route>
        <Route path='/contact.html' element={<Contact/>}></Route>
        <Route path='/blog.html' element={<Index/>}></Route>
      </Routes>
     </Router>
     </div>
  );
}

export default App;

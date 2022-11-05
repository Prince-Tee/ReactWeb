import taiwo from './components/taiwo.jpg'
import './App.css';
import Contact from './pages/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
  
} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
    
    <Routes>
    <Route path="/contact" element={<Contact />} />
    <Route path='/navvv' element={<navvv />}/>
    </Routes> 
    
     <div className='container'>
     <header>
    <img id='profile__img' alt='profilepic' src={taiwo}  />
    </header>

    <main>
    <h1 id='twitter'> ADEBIYI1605</h1>
    <h1 id='slack'> Taiwo Adebiyi </h1>
    <button><a  href='https://training.zuri.team/' id='btn__zuri'>TRANING</a></button>
    <button><a href=' http://books.zuri.team' id='books'>This is where you find books about design and coding</a></button>
    <button><a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' id='book__python'>ZURI PYTHON BOOKS</a></button>
    <button><a href='https://background.zuri.team' id='pitch'>Background checks on coders</a></button>
    <button><a href='https://books.zuri.team/design-rules' id='book__design'>ZURI free design books</a></button>
    <button> <a   href='/contact' id='contact'> Contact Me</a> </button>
    
     </main>
    
     
     
     
    </div>
  
    </div>
    
    </Router>
  );
}

export default App;
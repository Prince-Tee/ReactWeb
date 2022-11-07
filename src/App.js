import {Routes, Route, Link} from 'react-router-dom';
import taiwo from './components/taiwo.jpg'
import './App.css';
import Contact from './pages/Contact';


function App() {
  return (
     <div className="App">
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path='/' element={<App/>}/>
        </Routes> 

        <div className='container'>
        <header>
        <img id='profile__img' alt='profilepic' src={taiwo}  />
        </header>

        <main>
        <h1 id='twitter'> ADEBIYI1605</h1>
        <h1 id='slack' style={{display:none}}> Taiwo Adebiyi </h1>
        <div>
          <a  href='https://training.zuri.team/' 
          id='btn__zuri'>TRANING</a>
        </div>
        <div>
          <a href=' http://books.zuri.team' 
          id='books'>This is where you find books about design and coding</a>
        </div>
        <div>
          <a href='https://books.zuri.team/python-for-beginners?ref_id=ADEBIYI1605' 
          id='book__python'>ZURI PYTHON BOOKS</a>
        </div>
        <div>
          <a href='https://background.zuri.team' 
          id='pitch'>Background checks on coders</a></div>
        <div><a href='https://books.zuri.team/design-rules' id='book__design'>ZURI free design books</a></div>
        <div>
          <Link to='/contact' 
          id='contact'> Contact Me</Link>
          </div>
        
        </main>
        </div>
      
    </div>
        
  );
}

export default App;

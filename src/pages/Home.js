import React from 'react';
import taiwoo from '../components/taiwoo.jpg';
import './Home.css';


const Home = () => {
  return (
    <div>

<div className='container'>
     <header>
    <img id='profile__img' alt='profilepic' src={taiwoo}  />
    </header>

    <main>
    <h1 id='twitter'> @Iam_PrinceTee </h1>
   
    {/* <h1 id='slack'> Taiwo Adebiyi </h1> */}
    
    <button><a  href='https://training.zuri.team/' id='btn__zuri'>TRANING</a></button>
    <button><a href=' http://books.zuri.team' id='books'>DESIGN & CODING </a></button>
    <button><a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' id='book__python'> PYTHON BOOKS</a></button>
    <button><a href='https://background.zuri.team' id='pitch'>CODERS WORLD</a></button>
    <button><a href='https://books.zuri.team/design-rules' id='book__design'>ZURI FREE DESIGNS</a></button>
    <button> <a   href='/contact' id='contact'> CONTACT ME</a> </button>
   
    

     </main>
     


    </div>
    </div>
  )
}

export default Home
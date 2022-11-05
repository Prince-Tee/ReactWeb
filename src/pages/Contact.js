import React from 'react'

 
 import './contact.css'
 
const Contact = () => {
  return (
    
    
       
    <div className="cont">
      <header>
        <h1>Contact me</h1>
      </header>

      <main>
        <form action="#">
          <label for="firstname">First name</label>
          <input
            type="text"
            name="firstname"
            id="first_name"
            placeholder="firstname"
            required
          />
          <label for="lastname">Last name</label>
          <input
            type="text"
            name="lastname"
            id="last_name"
            placeholder="lastname"
            required
            />
          
          
          
          
          <br />
          <label class="mail" for="email">E-mail</label><br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e-mail"
            required
          />
          <br />
          <p>Message</p>
          <textarea name="" id="message" cols="40" rows="10"></textarea>
          <button id='btn_submit' type="submit">Submit</button>
        </form>
      </main>
    </div>

       
    
    
  )
}

export default Contact

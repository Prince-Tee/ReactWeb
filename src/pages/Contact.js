import React from 'react';
import './contact.css'
 
const Contact = () => {
  return (
    
    
       
    <div className="container">
      <div className="content">
        <header>
          <h1>Contact me</h1>
          <p className="ask-about">
            Hi there, contact me to ask about anything you have in mind.
          </p>
        </header>

        <form action="#">
          <main>
            <section>
              <div className="first-last">
                <div>
                  <label for="firstname">First name</label>
                  <br />
                  <input
                    class="names"
                    type="text"
                    name="firstname"
                    id="first_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label for="lastname">Last name</label>
                  <br />
                  <input
                    class="names"
                    type="text"
                    name="lastname"
                    id="last_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <label for="email">E-mail</label>
              <br />
              <input
                class="names"
                type="email"
                name="email"
                id="email"
                placeholder="yourname@email.com"
                required
              />

              <label for="msg">Message</label>
              <br />
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible.."
              ></textarea>

              <div className="check-info">
                <input type="checkbox" />
                <label>
                  You agree to providing your data to Prince-Tee who may contact
                  you.
                </label>
              </div>
            </section>
            <section>
              <button id="btn__submit" type="submit">
                Send Message
              </button>
            </section>
          </main>
        </form>

        </div>
        </div>

       
    
    
  )
}

export default Contact

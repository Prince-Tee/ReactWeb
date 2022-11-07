import {useState} from 'react'
import './contact.css'
 
const Contact = () => {
  const [info, setInfo] = useState({
    firstName:"",
    lastName:"",
    message:"",
    email:"",
    isChecked:false,
  });

  const [checkbox, setCheckbox] = useState(false);
  //state for checkbox

  let name = "Taiwo Adebiyi";

  const handleChange = (e) => {
    setInfo({...info,
    [e.target.name] : e.target.value
  });
  }

  const handleCheck = (e) => {
    setCheckbox(e.target.checked);
}
//handleCheck() to hold boolean value for checkbox

  const handleSubmit = (e) => {
    e.preventDefault();
    setInfo({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      isChecked: false
    })
  }
  return (
       
    <div className="container-fluid-sm px-3 pt-5">
      <div className="contact-border">
        <h2 className="pb-2 mt-5"
         style={{color:"#101828", fontSize:"36px"}}
         >Contact Me</h2>

         <p style={{color:"#475467", fontSize:"20px"}}>
            Hi there, contact me to ask me about anything you have in mind.
         </p>

      
        <form onSubmit={handleSubmit}>
        <div className='col-sm'>
          <label for="firstname" className="mb-1 mt-4">First name</label>
          <input
            type="text"
            name="firstName"
            id="first_name"
            className='form-control'
            placeholder="firstname"
            onChange={handleChange}
            value={info.firstName}
            required
          /></div>
          <div className='col-sm'>
          <label htmlFor="lastname" className="mb-1 mt-4">Last name</label>
          <input
            type="text"
            className='form-control'
            name="lastName"
            id="last_name"
            placeholder="lastname"
            onChange={handleChange}
            value={info.lastName}
            required
            />
          </div>
          <div className='grid mb-4'>
          <label class="email" for="email">E-mail</label><br />
          <input
            type="email"
            name="email"
            className='form-control'
            id="email"
            placeholder="e-mail"
            onChange={handleChange}
            value={info.email}
            required
          /></div>

           <div>
          <label htmlFor='message' className='mb-1 mt-2'>Message</label>
          <textarea name="message"
           id="message" 
           className='form-control'
           cols="20" 
           rows="4"
           onChange={handleChange}
           value={info.message}>
           </textarea>
          </div>

          <div className="form-check mb-3 mt-3">
                <input className="form-check-input"
                type="checkbox" 
                checked={checkbox}
                onChange={handleCheck}
                name="checkbox"
                required/>
            <label className="form-check-label">
                <span style={{color:"#475467"}}>
                    You agree to providing your data to {name} who may contact you.
                </span>
            </label>
        </div>

          <div className='d-grid'>
            <button id="btn__submit" 
            type="submit"
            className='btn btn-primary btn-block'>Submit</button>
          </div>
        </form>
      
    </div>
  </div>  
  )
}

export default Contact

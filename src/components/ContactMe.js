import React, { useState } from 'react'
import "./ContactMeStyles.css"

const ContactMe = () => {

  const[form, setForm] = useState(
    {
      fullName : "Full Name",
      email : "Email",
      phone : "Mobile Number",
      subject : "Subject",
      text : "Your Message"
    }
  );

  const handleChange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  return (
   <div className='contacts'> 
    <div className='container'>
      <input onChange={handleChange} type="text" value={form.fullName} name="fullName"  />
      <input onChange={handleChange} type="email" value={form.email} name="email" />
      <input onChange={handleChange} type="text" value={form.phone} name="phone" />
      <input onChange={handleChange} type="text" value={form.subject} name="subject" />
      <textarea onChange={handleChange} cols={30} rows={10} value={form.text} name="text" />
      <div className='bttn'>
         <button className='btn1'>Submit</button>
      </div>
    </div>
   </div> 
  )
}

export default ContactMe

import React, { useState } from "react";
import style from "./Login.module.css";
import emailjs from '@emailjs/browser';
// import Alert from 'react-bootstrap/Alert'

const Login = () => {

    const [obj,setobj]=useState({username:"",Email:"",password:"",to_name:"Ujjwal",message:"",my_file:""})
    // const [user,setUser] = useState({Username:"",Password:"",Email:"",ContactNo:""})
    
    // ...obj=name:"",password:""
    // const objs={
    //   name:'alina',
    //   paassword:"asdf",
    //   city:"haridwar"
    // }

    // const abs=objs;
    // const something = {...obj};
    // abs["city"]="palini";

    const handlechange=(e)=>{
      setobj({...obj,[e.target.name]:e.target.value});
    }
    
    const handlesubmit=(e)=>{
      e.preventDefault();
      // console.log(obj);
      // console.log(abs===objs);
      // console.log("this is abs" , abs);
      // console.log(something);
     console.log(obj);
    //  <Alert key={'primary'} variant={'primary'}>
    //     This is a {'primary'} alert—check it out!
    //  </Alert>
    // alert("Submmited");
    //  emailjs.send("service_lo29oau","template_betegon",{
    //   to_name: "ujjwal",
    //   from_name: "raman",
    //   message: "Happy New Year",
    //   });
      
      emailjs.send('service_lo29oau','template_betegon',obj,'DvOi-9Phq22YyGjn4')
        .then((result) => {
          console.log("sent");
          console.log(result.text);
        },(error) => {
          console.log(error.text);
        });
       
    }
    
return (
    <div className={style.backpage}>
      <div className={style.innerpage}>
        <div className={style.form}>
          <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
        <form action=''>
      <fieldset>
        <label>Enter Your User Name: <input type="text" name="username" required onChange={handlechange} value={obj.username}/></label>
        <label>Enter Your Email: <input type="Email" name="Email" required onChange={handlechange} value={obj.Email}/></label>
        <label>Create a New Password: <input type="password" name="password" pattern="[a-z0-5]{8,}" required onChange={handlechange} value={obj.password}/></label>
      </fieldset>
    
      <fieldset>
        <label>Upload a profile picture: <input type="file" name="my_file" value={obj.my_file} /></label>
        
        <label>How did you hear about us?
          <select name="referrer">
            <option value="">(select one)</option>
            <option value="1">Website adds</option>
            <option value="2">Social media</option>
            <option value="3">Friends</option>
            <option value="4">Other</option>
          </select>
        </label>
        <label>Provide a bio:
          <textarea name="message" rows="3" cols="30" placeholder="I like coding on the beach..." onChange={handlechange} value={obj.bio}></textarea>
			  </label>
      </fieldset>
      <input type="submit" value="Submit" onClick={handlesubmit}/>
    </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

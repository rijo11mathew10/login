import React,{useState} from "react";

export const Register = (props) =>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
      <div className="auth-form">
      <h2>Register</h2>
         <form className="registerform" onSubmit={handleSubmit}>
           
           <label htmlFor="name">Full name</label>  
           <input value={name}  onChange={(e)=>setName(e.target.value)} type="text" placeholder="fullname" id="name" name="name" />
           <label htmlFor="email">email</label>  
           <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail.com" id="email" name="email" />
           <label htmlFor="password">password</label>  
           <input vlue={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" />
           <button type="submit">Log In</button>
      </form>
      <button className="link-btn" onClick={()=>props.onFormSwitch("login")}>Already have an account.Log in Here!</button>
      
      </div>
        
    )
}
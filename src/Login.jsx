import React,{useState} from "react";

export const Login = (props) =>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    
    const handleSubmit=(e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
      <div className="auth-form">
      <h2>Login</h2>
        <form className="loginform" onSubmit={handleSubmit}>
           
            <label htmlFor="email">email</label>  
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="youremail.com" id="email" name="email" />
            <label htmlFor="password">password</label>  
            <input vlue={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*****" id="password" name="password" />
            <button type="submit">Log In</button>
       </form>
       <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Dont have an account.Register Here!</button>
      </div> 
       
    )
}
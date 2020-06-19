import React, {useState} from 'react'
import Signup from '../components/Forms/Signup'


const Register = () => {
   const[user,setUser]=useState({
username:'',
email:'',
password:'',
password2:''

   })

   const {username, email, password, password2} = user;
   
    return (
        <div className="signin-container">
          <Signup />
      </div>
    )
}

export default Register


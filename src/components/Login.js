import React from 'react';
import { useState,useEffect } from 'react';
import { Validation } from './Validation';
import { Link } from 'react-router-dom';

import styles from './SignUp.module.css'
import Swal from 'sweetalert2';

const Login = () => {
   const[data,setData]=useState({
    email : "" ,
    password : "",
   })
   const[errors,setErrors]=useState({})
   const[focus,setFocus]=useState({})
   useEffect(() =>{
    setErrors(Validation(data,"login"))
   },[data])

   const changeHandler=(e)=>{
        setData({...data,[e.target.name]: e.target.value})
   }
   const focusHandler = (e)=>{
        setFocus({...focus,[e.target.name]:true})
   }
   const blurHandler =((e)=>{
        setFocus({...focus,[e.target.name]:false})
   })
   const submithandler=(event)=>{
    event.preventDefault();
    if(!Object.keys(errors).length){
        Swal.fire({
            position: 'top-end',
            timerProgressBar:true,
            icon: 'success',
            title: 'You login successfully',
            showConfirmButton: false,
            timer: 1700
          })
    }
    else{
        setFocus({
            email : true ,
            password : true, 
        })
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            timerProgressBar:true,
            title: 'please fill the blank correctly',
            showConfirmButton: false,
            timer: 1500
          })
    }
   }

    return (
        <>
         <div className={styles.container}>
            <form className={styles.formcontainer} onSubmit={submithandler}>
               <h2 className={styles.formtitle}>Sign Up</h2>
               <label >Email : </label><br/>
               <input type="text" name='email' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.email && focus.email && <span className={styles.formspan} > {errors.email} </span> }<br/> 
               <label >Password : </label><br/>
               <input type="text" name='password' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.password &&focus.password && <span className={styles.formspan}> {errors.password} </span> }<br/>
               <div className={styles.footer}>
                <Link to="/signup" style={{color:"blue"}}>Sign Up</Link>
                <button type='submit'>Login</button>
               </div>
            </form>
         </div>
        </>
             
    );
};

export default Login;
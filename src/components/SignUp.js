import React from 'react';
import { useState,useEffect } from 'react';
import { Validation } from './Validation';
import { Link } from 'react-router-dom';

import styles from './SignUp.module.css'
import Swal from 'sweetalert2';

const SignUp = () => {
   const[data,setData]=useState({
    name : "" ,
    email : "" ,
    password : "",
    confirmPassword : "",
    isAccepted : false,
   })
   const[errors,setErrors]=useState({})
   const[focus,setFocus]=useState({})
   useEffect(() =>{
    setErrors(Validation(data,"signup"))
    
   },[data])

   const changeHandler=(e)=>{
      if(e.target.name==='isAccepted' ){
        setData({...data,isAccepted : e.target.checked})  
      }
      else{
        setData({...data,[e.target.name]: e.target.value})
      }
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
            icon: 'success',
            title: 'You sign up successfully',
            timerProgressBar:true,
            showConfirmButton: false,
            timer: 1500
          })
    }
    else{
        setFocus({
            name : true ,
            email : true ,
            password : true,
            confirmPassword : true,
            isAccepted : true,
        })
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'please fill the blank correctly',
            showConfirmButton: false,
            timerProgressBar:true,
            timer: 1500
          })
    }
   }
   
    return (
        <>
         <div className={styles.container}>
            <form className={styles.formcontainer} onSubmit={submithandler}>
               <h2 className={styles.formtitle}>Sign Up</h2>
                <label >Name : </label><br/>
                <input type="text" name='name' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.name && focus.name && <span className={styles.formspan}> {errors.name} </span>  }<br/>
               <label >Email : </label><br/>
               <input type="text" name='email' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.email && focus.email && <span className={styles.formspan} > {errors.email} </span> }<br/> 
               <label >Password : </label><br/>
               <input type="text" name='password' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.password &&focus.password && <span className={styles.formspan}> {errors.password} </span> }<br/>
               <label >Confirm Password : </label><br/>
               <input type="text" name='confirmPassword' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.confirmPassword && focus.confirmPassword && <span className={styles.formspan}> {errors.confirmPassword} </span>}<br/>
               <label >I accept terms of privacy policy </label>
               <input type="checkbox" name='isAccepted' onChange={changeHandler} onFocus={focusHandler} onBlur={blurHandler}/><br/>
               {errors.isAccepted && focus.isAccepted && <span className={styles.formspan}> {errors.isAccepted} </span>}<br/>
               <div className={styles.footer}>
                <Link to='/login'  style={{color:"blue"}}>Login</Link>
                <button type='submit'>Sign Up</button>
               </div>
            </form>
         </div>
        </>
             
    );
};

export default SignUp;
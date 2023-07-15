 export const Validation=(data,type)=>{
    const errors={}
   
    if(!data.email){
       errors.email = " Email is required "
    }
    else if(!data.email.includes('@gmail.com')) {
    errors.email='Email is invalid'
    }
    else{
     delete errors.email
    }
    if( !data.password){
        errors.password = " Password is required "
    }
    else if ( data.password.length < 6 ){
        errors.password = " Password needs to be 6 character or more "
    }
    else{
    delete errors.password
    }
   

    if(type==='signup'){

        if(!data.name.trim()){
            errors.name =" Username is required "
        }
        else{
            delete errors.name
        }
        if(!data.confirmPassword){
            errors.confirmPassword = " Please confirm your password "
        }
        else if ( data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password does not match "
        }  
        else{
        delete errors.confirmPassword
        }
        if(data.isAccepted){
            delete errors.isAccepted
        }
        else{
            errors.isAccepted = " Please accept our regulation"
        }
    }

    return errors

}
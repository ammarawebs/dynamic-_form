import React from 'react'
import Inputs from './Inputs'

const Input_form = ({fname_onchange, lname_onchange , email_onchange ,pass_onchange , fname_value , lname_value, email_value, pass_value , fname_error , lname_error , email_error , password_error, fname_name, lname_name, email_name, pass_name , del_onClick,btn_name }) => {
  return (
    <>
        
          <div  className='form'>
              <h1 className="form_heading">
                Welcome
              </h1>
              <br/>
              
              <Inputs
                htmlfor='firstName'
                label='First Name'
                type='text'
                name={fname_name}
                value={fname_value}
                placeholder='your first name'
                onChange={fname_onchange}
                error={fname_error}
              />
              <Inputs
                htmlfor='lastName'
                label='Last Name'
                type='text'
                name={lname_name}
                value={lname_value}
                placeholder='your last Name'
                onChange={lname_onchange}
                error={lname_error}
              />
              <Inputs
                htmlfor='email'
                label='Email'
                type='email'
                name={email_name}
                value={email_value}
                placeholder='your email'
                onChange={email_onchange}
                error={email_error}
              />
              <Inputs
                htmlfor='password'
                label='password'
                type='password'
                name={pass_name}
                value={pass_value}
                placeholder='your password'
                onChange={pass_onchange}
                error={password_error}
              />

              <button type='button' name={btn_name} className='form_btn' onClick={del_onClick}>Delete</button>
             

               
              
          </div> 
          
 
    </>
  )
}

export default Input_form
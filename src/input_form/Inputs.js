import React from 'react'

const Inputs = ({htmlfor, label, type , name , value , placeholder , onChange, error}) => {
  return (
    <>
            <div className="inputs">
                <label htmlFor={htmlfor} className='input_label'>
                    {label}
                </label>
                <input className='input_input' type={type} name={name}  value={value} placeholder={placeholder} onChange={onChange} required/>
                
            </div>
            <p className='input_error' >{error}</p>
    </>
  )
}

export default Inputs
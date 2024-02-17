import React from 'react'

export default function FormInput(props) {
    const {name,type,label, value, register} = props
  return (
    <div className="input-holder">
      <input type={type} placeholder=" " name={name} value={value} {...register}/>
      <label className="label">{label}</label>
    </div>
  )
}

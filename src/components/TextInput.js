import React from 'react'

function TextInput({value, onChange}) {
  return (
  
    <input type='text' value={value} onChange = {onChange} />
    
  )
}

export default TextInput
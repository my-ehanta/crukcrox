import React from 'react'

export default function Mehboob(props) {
    const capitalize=(word)=>{
const lower=word;
return lower.charAt(0).toUpperCase()+lower.substring(1).toLowerCase();

    }

    
  return (

    <div style={{height: '50px' }}>
   { props.meh &&<div className="alert alert-danger d-flex align-items-center" role="alert">
      <strong>{capitalize(props.meh.type)}</strong>  :{capitalize(props.meh.msg)}
     
</div>}
  
  </div>

  

  )
}

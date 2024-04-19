import React, { useState } from 'react'
import './css/options.css'

function Options({options,value,onChange}) {
    let[isOpen,setOpen]=useState(false)


  

    let ChangeSelect=(i)=>{
        onChange(i)
    }

    let CrossSelect=()=>{
        onChange('select option')
    }
  return (
    <div className='option'>

        <div className="select_Option" onClick={()=>{setOpen(!isOpen)}}>{value} <span onClick={CrossSelect}>x</span></div>
       
      <ul style={isOpen? {display:'block'}:{display:'none'}}>
           {
            options.map((val)=>{
                return <div className="value" onClick={()=>{ChangeSelect(val.label)}}>{val.label}</div>

            })
           }
      </ul>
       

      
    </div>
  )
}

export default Options

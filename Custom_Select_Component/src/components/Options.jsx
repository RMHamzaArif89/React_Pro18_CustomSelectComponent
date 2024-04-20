import React, { useRef, useState } from 'react'
import './css/options.css'

function Options({options,value,onChange,add}) {
    let[isOpen,setOpen]=useState(false)

     let val=useRef()
  

    let ChangeSelect=(i)=>{
        onChange(i)
    }

    let CrossSelect=()=>{
        onChange('select option')
    }


    let addSelect=(v)=>{
      add(v)
    }
  return (
    <div className='option'>

        <div className="select_Option" ref={val} onClick={()=>{setOpen(!isOpen)}}>{value} <span onClick={CrossSelect}>x</span ><span onClick={()=>{addSelect(val.current)}}>add</span></div>
       
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

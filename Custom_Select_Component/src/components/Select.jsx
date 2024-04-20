import React, { useState } from 'react'
import Options from './Options'
import './css/select.css'

function Select() {
    let options=[
        {label:'movie',value:1},
        {label:'game',value:2},
        {label:'cricket',value:3},
        {label:'onlineGame',value:4},
        {label:'exercise',value:5},
        {label:'dinner',value:6},
    ]

    let[value,setVlaue]=useState('select Option')
    let[selectValues,setSelectValues]=useState([])
    console.log(selectValues)

    
    let func2=(v2)=>{
      console.log(v2)

    }
  return (

  <>
    <div className='select'>
      <div className="values">
       {/* {selectValues} */}
       {selectValues}
      </div>

        <Options options={options} add={(v2)=>{func2(v2)}} value={value} onChange={(v)=>{setVlaue(v)}}/>
      
    </div>


    
  </>

    
  )
}

export default Select

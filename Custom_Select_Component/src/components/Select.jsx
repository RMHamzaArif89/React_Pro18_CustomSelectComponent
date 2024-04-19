import React, { useState } from 'react'
import Options from './Options'

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
    
  return (

  <>
    <div className='select'>

        <Options options={options} value={value} onChange={(v)=>{setVlaue(v)}}/>
      
    </div>


    
  </>

    
  )
}

export default Select

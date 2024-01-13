import React from 'react'
import './TitleStyle.css'
const Title = ({section ,desc}) => {
  return (
  <div className='container mt-3 mb-3'>
    <div className=' title pt-4'><h1>{section}</h1>
    <span className='underTitle'></span></div>
    <div className="description">
        {desc}
    </div>
</div>  )
}

export default Title
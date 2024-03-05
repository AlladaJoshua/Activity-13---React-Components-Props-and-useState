import React from 'react'

const CountDisplay = (props) => {
  return (
    <div>
      <h1 className='text-[65px] text-white'>{props.count}</h1>
    </div>
  )
}

export default CountDisplay

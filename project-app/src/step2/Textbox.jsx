import React from 'react'

const Textbox = ({placeholder}) => {
  return (
    <div>
      <input type="text"  className='border-2' placeholder={placeholder} />
    </div>
  )
}

export default Textbox

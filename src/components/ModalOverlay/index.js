import React from 'react'

function ModalOverlay(props) {
  return (
    <div className='modal'>
        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export default ModalOverlay
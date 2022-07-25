import React from 'react'
import style from './index.module.css';


function Backdrop(props) {
  return (
    <div onClick={props.onClose} className={style.backdrop}>{props.children}</div>
  )
}

export default Backdrop
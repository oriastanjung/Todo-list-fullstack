import React from 'react'
import Title from "../Title"
import Button from '../Button'

function Header(props) {
  return (
    <nav className={props.className}>
        <Title />
        <Button onClick={props.onClickButton} isLarge>Login</Button>
    </nav>
  )
}

export default Header
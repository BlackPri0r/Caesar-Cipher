import React from 'react'

const Button = ({label, label2, onClick}) => {
  return (
    <div className="buttonContainer">
        <div>
            {label2}
        </div>
        <div className="cipherLevelButton"onClick={onClick}>
            {label}
        </div>
    </div>
  )
}

export default Button
import React from 'react'
import ButtonStyles from "./Button.module.css";

export interface ButtonType{
  children:React.ReactNode;
  disabled?:boolean
  onClick?:()=>void;

}
const Button = ({disabled=false,onClick,children}:ButtonType) => {
  return (
    <div>
        <button {...{disabled,onClick}}  className={ButtonStyles.buttonStyles}>{children}</button>
    </div>
  )
}

export default Button
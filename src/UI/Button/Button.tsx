import { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.css'
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode;
className?:string;
}
const Button = ({ children , className ,...rest }:IProps) => {
    return (
        <>
        <button className={`${className}`} {...rest}>
            {children}
        </button>
        </>
    )
}
export default Button
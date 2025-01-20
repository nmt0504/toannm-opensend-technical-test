import { FC, PropsWithChildren } from "react"

import './button.css'

const Button: FC<
  PropsWithChildren<{
    onClick?: VoidFunction
  }>
> = ({ onClick, children }) => {
  return <button className="btn primary" onClick={onClick}>{children}</button>
}

export default Button
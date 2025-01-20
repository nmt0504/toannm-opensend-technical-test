import { FC } from "react"
import { type PaperSizeType } from '../../api/type'

import './drop-down.css'

const Dropdown: FC<{
  onSetValue: (value: PaperSizeType) => void
}> = ({ onSetValue }) => {
  return (
    <div className="dropdown-wrapper">
      <select onChange={(e) => onSetValue(e.target.value as PaperSizeType)}>
        <option value="A4">A4</option>
        <option value="A5">A5</option>
        <option value="B4">B4</option>
        <option value="B5">B5</option>
      </select>
    </div>
  )
}

export default Dropdown;
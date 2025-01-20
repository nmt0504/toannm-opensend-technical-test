import { FC } from "react"
import { type paperSizeType } from '../../api/type'

import './drop-down.css'

const Dropdown: FC<{
  onSetValue: (value: paperSizeType) => void
}> = ({ onSetValue }) => {
  return (
    <div className="dropdown-wrapper">
      <select onChange={(e) => onSetValue(e.target.value as paperSizeType)}>
        <option value="A4">A4</option>
        <option value="A5">A5</option>
        <option value="B4">B4</option>
        <option value="B5">B5</option>
      </select>
    </div>
  )
}

export default Dropdown;
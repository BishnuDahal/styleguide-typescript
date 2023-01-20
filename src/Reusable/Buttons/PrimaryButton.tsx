import React from "react";
import { classNames } from "../../utils/classNames";
import Spinner from "../Spinner";

interface IButtonProps {
  text: string | React.ReactNode
  type?: any
  buttonType?: string
  buttonSize?: string
  [other: string]: unknown;
  disable?: boolean
  loading?: boolean
}

const PrimaryButton: React.FC<IButtonProps> = (props) => {
  const { disable = false, text, type = "submit", buttonType = "primary", buttonSize = "large", loading = false, ...other } = props
  return (
    <button
      className={classNames(
        buttonType === "primary" ? 'bg-[#5b6ab0] hover:bg-purple-700' : "bg-red-600 hover:bg-red-700",
        ' text-white text-sm max-h-fit w-fit rounded-2xl shadow-lg hover:shadow-xl transition duration-200 text-center cursor-pointer',
        buttonSize === "large" ? 'font-bold py-2 px-2' : 'm-1 py-1 px-1 h-fit'
      )}
      style={{ minWidth: "100px" }}
      type={type}
      disabled={disable}
      {...other}
    >
      {loading ? <Spinner /> : text}
    </button>
  )
}
export default PrimaryButton

import React from 'react'

type Props = {
  onClick: (event: MouseEvent) => void
  text: string
}

const PrimaryButton = (props: Props) => {
  const { onClick, text } = props;
  return (
    <button
      className="bg-[#5b6ab0] h-12 w-12 flex p-[10px] shadow rounded-xl cursor-pointer"
      type="submit"
      onClick={() => { onClick }}>
      {text}
    </button>
  )
}

export default PrimaryButton
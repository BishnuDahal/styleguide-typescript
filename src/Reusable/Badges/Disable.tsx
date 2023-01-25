import React from 'react'

type Props = {
  title: string
}

const Disable = (props: Props) => {
  return (
    <div className='px-4 py-1 w-fit text-white border-0 cursor-pointer rounded-full bg-gray-500 text-center'>
      {props.title}
    </div>
  )
}

export default Disable
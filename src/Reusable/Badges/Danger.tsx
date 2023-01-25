import React from 'react'

type Props = {
  title:any
}

const Danger = (props: Props) => {
  return (
    <div className='px-2 py-1 w-fit text-white border-0 rounded-md bg-red-500 text-center text-sm'>
    {props.title}
  </div>
  )
}

export default Danger
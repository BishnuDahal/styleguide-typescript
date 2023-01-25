type Props = {
  title: any
}

const Success = (props: Props) => {
  return (
    <div className='px-4 py-1 w-fit text-white border-0 cursor-pointer rounded-full bg-green-500 text-center'>
      {props.title}
    </div>
  )
}

export default Success
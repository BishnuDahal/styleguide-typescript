import React from 'react'

type Props = {
  title: string
  description: string
  src: any
}

export default function Card(props: Props) {
  const { title, description, src } = props;
  return (
    <div className="bg-white flex flex-col items-center justify-center pt-8 pb-4 shadow-sm rounded-xl mx-2 gap-y-2">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp7_6BOtmnzK4Qz1mf1JYNEhkgKPzymcgCRNUli0AqgFzgLlqJJyLQyrnRfLlJVeAckX4&amp;usqp=CAU" alt="" className="rounded-full w-14 h-14 object-fill" />
      <h3 className="font-semibold capitalize">{title}</h3>
    </div>
  )
}
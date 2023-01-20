// For more spinner please follow this link https://larainfo.com/blogs/tailwind-css-loading-spinner-example

import React from "react";

interface SpinnerProps {
  size?: number
  color?: string
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { size = 10, color = "blue" } = props
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className={"w-5 h-5 border-4 border-black border-double rounded-full animate-spin m-auto"}
    >
    </div>
  )
}

export default Spinner;

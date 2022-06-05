import React from "react"
import { useImperativeHandle, useState } from "react"

type Props = {
  children: React.ReactNode
  labelShow: string
  labelCancel: string
}

export type ToggableHandle = {
  toggleVisibility: () => void
}

const Togglable = React.forwardRef<ToggableHandle, Props>((props, ref) => {
  const [visible, setVisible] = useState<boolean>(false)

  const showWhenVisible = { display: visible ? "" : "none" }
  const hideWhenVisible = { display: visible ? "none" : "" }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    }
  })
  return (
    <div>
      <div style={hideWhenVisible}>
        <button
          type="button"
          onClick={toggleVisibility}
          className="bg-blue-400 w-full rounded-md mt-4 h-12 font-medium text-white text-lg hover:cursor-pointer"
        >
          {props.labelShow}
        </button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button
          onClick={toggleVisibility}
          className="bg-red-400 w-full rounded-md mt-4 h-12 font-medium text-white text-lg hover:cursor-pointer"
        >
          {props.labelCancel}
        </button>
      </div>
    </div>
  )
})

Togglable.displayName = "toggable"

export default Togglable

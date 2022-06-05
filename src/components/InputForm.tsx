import { UseFormRegisterReturn } from "react-hook-form"

type Props = {
  label: string
  textLabel: string
  validation: HTMLParagraphElement
  hook: Hook
  register: UseFormRegisterReturn
  required: bool
  style?: string
  placeholder: string
}

type bool = "true" | "false"

type Hook = {
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
}

const InputForm = ({
  label,
  textLabel,
  validation,
  hook,
  register,
  required,
  style,
  placeholder,
}: Props) => {
  return (
    <div>
      <label htmlFor={label} className="block text-lg text-gray-800">
        {textLabel} {required && <span className="text-red-400"> *</span>}
      </label>
      <input
        {...register}
        className={`w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40 md:text-lg lg:text-xl ${style}`}
        placeholder={placeholder}
        {...hook}
      />
      <>{validation}</>
    </div>
  )
}

export default InputForm

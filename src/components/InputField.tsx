import { InputFieldProps } from "../types/users/users"

const InputField = ({name, label, value, onChange, className, type, placeholder, required}: InputFieldProps) => {
  
  if (required) {
    return (
      <div>
        {label && <label htmlFor={name} className="block text-sm md:text-md text-gray-800">{label}</label>}
        <input 
          type={type}
          onChange={onChange}
          name={name}
          value={value}
          className={className}
          placeholder={placeholder}
          required />
      </div>
    )
  }
  else {
    return (
      <div>
        {label && <label htmlFor={name} className="block text-sm text-gray-800">{label}</label>}
        <input 
          type={type}
          onChange={onChange}
          name={name}
          value={value}
          className={className}
          placeholder={placeholder} />
      </div>
    )
  }
  
}

export default InputField
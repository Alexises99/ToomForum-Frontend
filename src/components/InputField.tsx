import { InputFieldProps } from "../interfaces/users/users"

const InputField = ({name, label, value, onChange, className, type, placeholder, required, accept}: InputFieldProps) => {
  
  if (required) {
    return (
      <div>
        {label && <label htmlFor={name} className="block text-sm md:text-lg text-gray-800">{label} <span className="text-red-400">*</span></label>}
        <input 
          type={type}
          onChange={onChange}
          name={name}
          accept={accept}
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
        {label && <label htmlFor={name} className="block text-lg text-gray-800">{label}</label>}
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
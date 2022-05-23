export interface InputFieldProps {
  name: string
  label: string
  value: string | number
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className: string
  type: string
  placeholder: string 
  required?: boolean
}

export interface FormProps {
  className: string
  handleSubmit: () => void,
  children: JSX.Element | JSX.Element[];
}

export interface UserEntry {
  username: string,
  password: string
}

export interface UserEntryAuth extends UserEntry {
  token: string
}
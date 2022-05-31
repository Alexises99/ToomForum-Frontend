export interface InputFieldProps {
  name: string
  label: string
  value: any
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className: string
  type: string
  placeholder?: string 
  required?: boolean,
  accept?: string
}

export interface FormProps {
  className: string
  handleSubmit: () => void,
  children: JSX.Element | JSX.Element[];
}

export interface UserEntry {
  username: string,
  password: string,
}

export interface UserEntryImage extends UserEntry {
  imageId?: number
}

export interface UserEntryAuth extends UserEntryImage {
  token: string
}
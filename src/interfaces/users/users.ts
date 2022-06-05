export interface InputFieldProps {
  name: string
  label: string
  value: any
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className: string
  type: string
  placeholder?: string
}

export interface FormProps {
  className: string
  handleSubmit: () => void
  children: JSX.Element | JSX.Element[]
}

export interface UserEntry {
  id?: number
  username: string
  password: string
  ImageId?: number | null
  token?: string
}

export interface UserEntryWithIsland extends UserEntry {
  islandName: string
  fruit: string
  dreamcode: string
}

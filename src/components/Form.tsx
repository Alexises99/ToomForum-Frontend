import { FormProps } from "../types/users/users"

const Form = ({className, handleSubmit, children}: FormProps) => {

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleSubmit()
  }

  return (
    <form className={className} onSubmit={handleSubmitForm}>
      {children}
    </form>
  )
}

export default Form
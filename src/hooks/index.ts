import {useState} from 'react'

export const useField = (type: string) => {

  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    value,
    onChange,
    reset,
    type
  }
}

export const useFieldFile = () => {

  const type = 'file'

  const [value, setValue] = useState<string>()
  const [image, setImage] = useState<File>()

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
     setValue(URL.createObjectURL(event.target.files[0]))
     setImage(event.target.files[0])
    }
  }

  const reset = () => {
    setValue(undefined)
  }

  return {
    value,
    image,
    onChange,
    reset,
    type
  }
}


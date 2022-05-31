import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, waitFor} from '@testing-library/react'
import InputField from '../components/InputField'
import { useField } from '../hooks'
import { InputFieldProps } from '../interfaces/users/users'

test('renders label', () => {

  const {reset: resetInput, ...input} = useField('text')

  const props: InputFieldProps = {
    label: 'Test',
    name: 'test',
    ...input,
    className: ''
  }

  const component = render(
    <InputField {...props}/>
  )
})
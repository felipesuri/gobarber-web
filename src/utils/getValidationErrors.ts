// eslint-disable-next-line no-unused-vars
import { ValidationError } from 'yup'

interface Errors {
  [key: string]: string
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {}

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message
  })

  return validationErrors
}

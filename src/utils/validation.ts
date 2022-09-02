import * as validation from 'yup'

validation.setLocale({
  mixed: {
    default: 'Campo inválido',
    required: 'Campo obrigatório!',
    oneOf: 'Deve ser um dos seguintes valores: ${values}',
  },
  string: {
    email: 'Email inválido',
    length: 'Deve ter exatamente ${length} caracteres',
    min: 'Deve ter pelo menos ${min} caracteres',
    max: 'Deve ter no máximo ${max} caracteres',
    url: 'Deve ter um formato de URL válida',
    trim: 'Não deve conter espaços no início ou no fim.',
    lowercase: 'Deve estar em maiúsculo',
    uppercase: 'Deve estar em minúsculo',
  },
  number: {
    min: 'Deve ser no mínimo ${min}',
    max: 'Deve ser no máximo ${max}',
    lessThan: 'Deve ser menor que ${less}',
    moreThan: 'Deve ser maior que ${more}',
    positive: 'Deve ser um número posítivo',
    negative: 'Deve ser um número negativo',
    integer: 'Deve ser um número inteiro',
  },
  date: {
    min: 'Deve ser maior que a data ${min}',
    max: 'Deve ser menor que a data ${max}',
  },
  array: {
    min: 'Deve ter no mínimo ${min} itens',
    max: 'Deve ter no máximo ${max} itens',
  },
})

export const yup = validation

export const schemaPersonalInfo = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  cpf: yup.string().required(),
})

export const schemaAddressInfo = yup.object().shape({
  cep: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
})

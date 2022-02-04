const environments = {
  development: 'https://scaleappforgood.herokuapp.com/api/v1',//'http://localhost:3000/api/v1',
  test: 'http://localhost:3333/api/v1',
  production: 'https://scaleappforgood.herokuapp.com/api/v1',
  integration: '',
  deployment: '',
  build: ''
}

const env = process.env.NODE_ENV || 'production'

export const baseApiUrl = environments[env]

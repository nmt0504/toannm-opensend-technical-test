export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  access_token: string
  client_token: string
}

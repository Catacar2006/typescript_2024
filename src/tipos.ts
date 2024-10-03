// definicion de tipos
export type Estudiante = {
    nombre: string,
    apellido: string,
    edad?: number
    addresses?: Address []
}

export type Address = {
    street: string,
    numero: number,
    sector?: string,
    city: string,
    postalCode?: string
}
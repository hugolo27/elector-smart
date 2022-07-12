import { DomainError } from "./DomainError";

export class BadCredentialsError extends DomainError {
  constructor() {
    super('No se pudo iniciar sesión con las credenciales proveídas');
  }
}

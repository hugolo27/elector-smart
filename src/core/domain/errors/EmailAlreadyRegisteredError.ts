import { DomainError } from "./DomainError";

export class EmailAlreadyRegisteredError extends DomainError {
  constructor() {
    super(`This email is already in use`);
  }
}

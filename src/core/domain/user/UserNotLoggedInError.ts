import { DomainError } from "../errors/DomainError";

export class UserNotLoggedInError extends DomainError {
  constructor() {
    super("No inició sesión");
  }
}

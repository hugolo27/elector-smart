import { DomainError } from "./DomainError";

export class InvalidOldPasswordError extends DomainError {
  constructor() {
    super(`Invalid old password`);
  }
}

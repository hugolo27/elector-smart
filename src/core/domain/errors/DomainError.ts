import { CustomError } from "ts-custom-error";

export abstract class DomainError extends CustomError {
    protected constructor(props: any) {
        super(props);
    }
}

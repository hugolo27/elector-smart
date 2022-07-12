import {AuthService} from "../domain/auth/AuthService";
import {SessionStorage} from "../domain/auth/SessionStorage";
import {UserStorage} from "../domain/user/UserStorage";

export class Login {
    private readonly authService: AuthService;
    private readonly sessionStorage: SessionStorage;
    private readonly userStorage: UserStorage;

    constructor(
        authService: AuthService,
        sessionStorage: SessionStorage,
        userStorage: UserStorage
    ) {
        this.authService = authService;
        this.sessionStorage = sessionStorage;
        this.userStorage = userStorage;
    }

    execute = async (email: string, password: string): Promise<void> => {
        const { user, token } = await this.authService.logIn(email, password);
        await this.userStorage.store(user);
        await this.sessionStorage.store(token);
    };
}

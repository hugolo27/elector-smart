import {HttpAuthService} from "./domain/infraestructure/http/HttpAuthService";
import {LocalSessionStorage} from "./domain/infraestructure/localStorage/LocalSessionStorage";
import {HttpClient} from "./domain/infraestructure/http/HttpClient";
import {Login} from "./useCases/Login";
import {LocalUserStorage} from "./domain/infraestructure/localStorage/LocalUserStorage";

export class Provider {
  static login = () =>
      new Login(
          D.authService(),
          D.sessionStorage(),
          D.userStorage()
      );
}

class Dependencies {
  static authService = () => this.singleton("authService", () => new HttpAuthService(this.httpBackendClient()));
  static httpBackendClient = () => new HttpClient(process.env.GATSBY_BACKEND_URL!, this.sessionStorage());
  static sessionStorage() {
    return this.singleton("sessionStorage", () => new LocalSessionStorage());
  }
  static userStorage() {
    return this.singleton("userStorage", () => new LocalUserStorage());
  }

  static singleton<T>(name: string, build: () => T): T {
    // @ts-ignore
    if (!this._singleInstances[name]) {
      // @ts-ignore
      this._singleInstances[name] = build();
    }
    // @ts-ignore
    return this._singleInstances[name];
  }

  static _singleInstances = {};
}

const D = Dependencies;

export interface SessionStorage {
  get(): Promise<string | null>;

  hasSession(): Promise<boolean>;

  remove(): void;

  store(session: string): void;
}

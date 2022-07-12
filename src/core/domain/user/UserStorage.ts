import { User } from "./User";

export type UserCallback = (user: User | null) => void;
export type UserSubscription = { unsubscribe: () => void };

export interface UserStorage {
  get(): Promise<User | null>;

  getUserId(): Promise<string | undefined>;

  store(user: User): any;

  remove(): void;

  subscribe(user: UserCallback): UserSubscription;
}

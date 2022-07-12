import {User} from "../../user/User";
import {UserCallback, UserStorage, UserSubscription} from "../../user/UserStorage";

export class LocalUserStorage implements UserStorage {
  private subscribers: UserCallback[] = [];

  async get(): Promise<User | null> {
    const userJSON = sessionStorage.getItem("USER");
    return userJSON ? JSON.parse(userJSON) : null;
  }

  getUserId = async (): Promise<string | undefined> => {
    const user = await this.get();
    return user?.pk;
  };

  async store(user: User) {
    this.subscribers.forEach((subscriberCallback) => subscriberCallback(user));
    await sessionStorage.setItem("USER", JSON.stringify(user));
  }

  remove = () => {
    this.subscribers.forEach((subscriberCallback) => subscriberCallback(null));
    sessionStorage.removeItem("USER");
  };

  subscribe = (callback: UserCallback): UserSubscription => {
    const index = this.subscribers.push(callback) - 1;
    return {
      unsubscribe: () => this.subscribers.splice(index, 1),
    };
  };
}

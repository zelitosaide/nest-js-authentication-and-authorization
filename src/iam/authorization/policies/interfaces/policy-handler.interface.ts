import { ActiveUserData } from "src/iam/interfaces/active-use-data";
import { Policy } from "./policy.interface";

export interface PolicyHandler<T extends Policy> {
  handle(policy: T, user: ActiveUserData): Promise<void>;
}

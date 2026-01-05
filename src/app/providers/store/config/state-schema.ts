import { CounterSchema } from "entities/counter";
import { IUserSchema } from "entities/user";
import { ILoginSchema } from "features/auth-by-username";

export interface StateSchema {
  counter: CounterSchema,
  user: IUserSchema,
  loginForm?: ILoginSchema
}
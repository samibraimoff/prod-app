import { CounterSchema } from "entities/counter";
import { IUserSchema } from "entities/user/model/types";

export interface StateSchema {
  counter: CounterSchema,
  user: IUserSchema
}
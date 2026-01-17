import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/store";

type ActionCreatorType<Return, Args, RejectedValue> = (args: Args) => AsyncThunkAction<Return, Args, {
  rejectValue: RejectedValue
}>

export class TestAsyncThunk<Return, Args, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Args, RejectedValue>;

  constructor(actionCreator: ActionCreatorType<Return, Args, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(args: Args) {
    const action = this.actionCreator(args);
    return action(this.dispatch, this.getState, undefined);
  }
}
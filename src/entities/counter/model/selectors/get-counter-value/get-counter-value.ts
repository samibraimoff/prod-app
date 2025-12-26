import { createSelector } from "@reduxjs/toolkit"
import { getCounter } from "../get-counter/get-counter"
import { CounterSchema } from "../../types";

export const getCounterValue = createSelector(getCounter, (counter: CounterSchema) => counter.value);
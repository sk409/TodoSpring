import { InjectionKey } from "@vue/runtime-core";

export type OnStoreTodo = (name: String) => void;

export const onStoreTodoKey = Symbol(
  "OnStoreTodo"
) as InjectionKey<OnStoreTodo>;

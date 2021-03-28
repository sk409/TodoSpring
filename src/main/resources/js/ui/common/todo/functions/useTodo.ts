import { reactive } from "@vue/reactivity";
import { computed, InjectionKey } from "@vue/runtime-core";
import Todo from "~/models/Todo";

export default function useTodo(aTodos: Todo[]) {
  const todosReactive = reactive(aTodos);
  const todos = computed(() => todosReactive);

  const appendTodo = (todo: Todo) => todosReactive.push(todo);

  return {
    appendTodo,
    todos,
  };
}

export type TodoStore = ReturnType<typeof useTodo>;
export const todoStoreKey = Symbol("TodoStore") as InjectionKey<TodoStore>;

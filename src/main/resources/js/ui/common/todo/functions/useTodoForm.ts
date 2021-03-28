import { ref } from "@vue/reactivity";
import { InjectionKey } from "@vue/runtime-core";

export default function useTodoForm(name?: String) {
  const nameRef = ref(name ?? "");

  const validate = () => {
    if (nameRef.value.length === 0) {
      return false;
    }
    return true;
  };

  return {
    nameRef,
    validate,
  };
}

export type TodoFormStore = ReturnType<typeof useTodoForm>;
export const todoFormStoreKey = Symbol(
  "TodoFormStore"
) as InjectionKey<TodoFormStore>;

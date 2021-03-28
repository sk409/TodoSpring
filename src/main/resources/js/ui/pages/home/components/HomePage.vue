<template>
  <TheScaffold>
    <TodoList />
  </TheScaffold>
</template>

<script lang="ts">
import { ComponentObjectPropsOptions, provide } from "@vue/runtime-core";
import Todo from "~/models/Todo";
import TodoList from "^/todo/components/TodoList.vue";
import { onStoreTodoKey } from "^/todo/data/OnStoreTodo";
import useTodo, { todoStoreKey } from "^/todo/functions/useTodo";
import useTodoRepository from "^/todo/functions/useTodoRepository";

interface Props {
  todos?: Required<Todo>[];
}

export default {
  name: "HomePage",
  components: {
    TodoList,
  },
  props: {
    todos: {
      type: Object,
      required: true,
    },
  } as ComponentObjectPropsOptions<Props>,
  setup(props: Props) {
    const todos =
      props.todos?.map((todo) => new Todo(todo.id, todo.name)) ?? [];

    const todoStore = useTodo(todos);
    provide(todoStoreKey, todoStore);

    const { storeTodo } = useTodoRepository();
    provide(onStoreTodoKey, async (name: String) => {
      const todo = await storeTodo(name);
      todoStore.appendTodo(todo);
    });

    return {
      todos: todos,
    };
  },
};
</script>

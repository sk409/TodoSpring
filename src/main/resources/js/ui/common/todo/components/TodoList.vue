<template>
  <div class="todo-list">
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    <TodoCreate />
  </div>
</template>

<script lang="ts">
import { inject } from "@vue/runtime-core";
import TodoCreate from "~/ui/common/todo/components/TodoCreate.vue";
import TodoListItem from "~/ui/common/todo/components/TodoListItem.vue";
import { todoStoreKey } from "~/ui/common/todo/functions/useTodo";

export default {
  name: "TodoList",
  components: {
    TodoCreate,
    TodoListItem,
  },
  setup() {
    const { todos } = inject(todoStoreKey)!;

    return {
      todos: todos,
    };
  },
};
</script>

<template>
  <div class="todo-list-item">
    <div>{{ todo.name }}</div>
  </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import Todo from "~/models/Todo";

type PropsType = {
  todo?: Todo;
};

export default {
  name: "TodoListItem",
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props: PropsType) {
    return {
      name: props.todo!.name,
    };
  },
};
</script>

<template>
  <div class="todo-create">
    <div v-if="!editingRef" class="d-flex">
      <button class="add-button" @click="startEditing">タスクを追加</button>
    </div>
    <div class="todo-create-card" v-else>
      <form>
        <input v-model="nameRef" type="text" />
      </form>
      <div class="d-flex">
        <AppButton @click="onSubmit">タスクを追加</AppButton>
        <AppButton text @click="endEditing">キャンセル</AppButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import useTodoForm from "^/todo/functions/useTodoForm";
import { onStoreTodoKey } from "^/todo/data/OnStoreTodo";

export default {
  name: "TodoCreate",
  setup() {
    const onStoreTodo = inject(onStoreTodoKey)!;

    const { nameRef } = useTodoForm("");

    const editingRef = ref(false);

    const startEditing = () => (editingRef.value = true);
    const endEditing = () => (editingRef.value = false);

    const onSubmit = () => {
      onStoreTodo(nameRef.value);
    };

    return {
      editingRef,
      endEditing,
      nameRef,
      onSubmit,
      startEditing,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "~@/variables" as v;

.add-button {
  background-color: transparent;
  border: none;
  color: grey;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  margin: 0;
  padding: 0 0 8px;
  text-align: left;
  text-decoration: none;
  width: 100%;
}

.add-button:hover {
  color: v.$primary-color;
}

.todo-create-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px 10px 0;
  cursor: text;
}
</style>

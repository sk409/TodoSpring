import axios from "axios";
import Todo from "~/models/Todo";

export default function useTodoRepository() {
  const storeTodo = async (name: String) => {
    const response = await axios.post("/todos", { name });
    const data = response.data as Required<Todo>;
    const todo = new Todo(data.id, data.name);
    return todo;
  };

  return {
    storeTodo,
  };
}

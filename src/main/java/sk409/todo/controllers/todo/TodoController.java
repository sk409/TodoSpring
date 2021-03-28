package sk409.todo.controllers.todo;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import sk409.todo.models.Todo;
import sk409.todo.repositories.TodoRepository;

@Controller
public class TodoController {

    private final TodoRepository todoRepository;

    TodoController(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @PostMapping("/todos")
    @ResponseBody
    public Todo store(@RequestBody Todo todo, BindingResult result) {
        todoRepository.save(todo);
        return todo;
    }
}
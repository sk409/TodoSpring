package sk409.todo.controllers.home;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import lombok.AllArgsConstructor;
import sk409.todo.repositories.TodoRepository;

@Controller
@AllArgsConstructor
public class HomeController {

    private final TodoRepository todoRepository;

    @GetMapping("/")
    public ModelAndView home(ModelAndView mav) {
        final var todos = todoRepository.findAll();

        mav.setViewName("home/index.html");
        mav.addObject("todos", todos);
        return mav;
    }
}

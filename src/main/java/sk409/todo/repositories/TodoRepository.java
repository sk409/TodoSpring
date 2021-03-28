package sk409.todo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sk409.todo.models.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
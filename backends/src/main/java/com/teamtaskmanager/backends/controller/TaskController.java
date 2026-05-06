package com.teamtaskmanager.backends.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.teamtaskmanager.backends.dto.DashboardResponse;
import com.teamtaskmanager.backends.entity.Task;
import com.teamtaskmanager.backends.entity.TaskStatus;
import com.teamtaskmanager.backends.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin("*")
public class TaskController {

    @Autowired
    private TaskService taskService;

    // Create Task
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    // Get All Tasks
    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    // Update Task Status
    @PutMapping("/{id}")
    public Task updateTaskStatus(
            @PathVariable Long id,
            @RequestParam TaskStatus status) {

        return taskService.updateTaskStatus(id, status);
    }

    // Dashboard API
    @GetMapping("/dashboard")
    public DashboardResponse getDashboardStats() {
        return taskService.getDashboardStats();
    }
}
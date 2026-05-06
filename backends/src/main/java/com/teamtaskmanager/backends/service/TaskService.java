package com.teamtaskmanager.backends.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teamtaskmanager.backends.dto.DashboardResponse;
import com.teamtaskmanager.backends.entity.Task;
import com.teamtaskmanager.backends.entity.TaskStatus;
import com.teamtaskmanager.backends.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    // Create Task
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    // Get All Tasks
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    // Update Task Status
    public Task updateTaskStatus(Long id, TaskStatus status) {

        Optional<Task> optionalTask = taskRepository.findById(id);

        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setStatus(status);
            return taskRepository.save(task);
        }

        return null;
    }

    // Dashboard Statistics
    public DashboardResponse getDashboardStats() {

        long totalTasks = taskRepository.count();

        long pendingTasks = taskRepository.countByStatus(TaskStatus.PENDING);

        long inProgressTasks = taskRepository.countByStatus(TaskStatus.IN_PROGRESS);

        long completedTasks = taskRepository.countByStatus(TaskStatus.COMPLETED);

        long overdueTasks = taskRepository.countByDeadlineBeforeAndStatusNot(
                LocalDate.now(),
                TaskStatus.COMPLETED
        );

        return new DashboardResponse(
                totalTasks,
                pendingTasks,
                inProgressTasks,
                completedTasks,
                overdueTasks
        );
    }
}
package com.teamtaskmanager.backends.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teamtaskmanager.backends.entity.Task;
import com.teamtaskmanager.backends.entity.TaskStatus;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    long countByStatus(TaskStatus status);

    long countByDeadlineBeforeAndStatusNot(
            LocalDate date,
            TaskStatus status);
}
import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Tasks() {
  const [tasks, setTasks] = useState([]);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    status: "PENDING",
    deadline: "",
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await API.get("/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", taskData);

      alert("Task Created Successfully!");

      setTaskData({
        title: "",
        description: "",
        status: "PENDING",
        deadline: "",
      });

      fetchTasks();
    } catch (error) {
      alert("Task creation failed!");
      console.error(error);
    }
  };

  const updateTaskStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}?status=${status}`);
      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Task Management</h2>

      <div className="card shadow p-4 mb-4">
        <form onSubmit={createTask}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Task Title"
              value={taskData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Task Description"
              value={taskData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="date"
              name="deadline"
              className="form-control"
              value={taskData.deadline}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Create Task
          </button>
        </form>
      </div>

      <div className="card shadow p-4">
        <h4 className="mb-3">All Tasks</h4>

        <ul className="list-group">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <strong>{task.title}</strong> - {task.description} - {task.status}

              <div className="mt-2">
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() =>
                    updateTaskStatus(task.id, "IN_PROGRESS")
                  }
                >
                  In Progress
                </button>

                <button
                  className="btn btn-primary btn-sm"
                  onClick={() =>
                    updateTaskStatus(task.id, "COMPLETED")
                  }
                >
                  Complete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-4">
        <Link to="/dashboard">
          <button className="btn btn-secondary">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Tasks;
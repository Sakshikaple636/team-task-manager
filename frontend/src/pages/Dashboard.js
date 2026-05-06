import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState({
    totalTasks: 0,
    pendingTasks: 0,
    inProgressTasks: 0,
    completedTasks: 0,
    overdueTasks: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await API.get("/tasks/dashboard");
      setStats(response.data);
    } catch (error) {
      console.error("Dashboard fetch failed", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Team Task Manager Dashboard</h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h4>Total Tasks</h4>
            <h2>{stats.totalTasks}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h4>Pending Tasks</h4>
            <h2>{stats.pendingTasks}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h4>In Progress</h4>
            <h2>{stats.inProgressTasks}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h4>Completed</h4>
            <h2>{stats.completedTasks}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow p-3">
            <h4>Overdue</h4>
            <h2>{stats.overdueTasks}</h2>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/projects">
          <button className="btn btn-primary me-3">
            Manage Projects
          </button>
        </Link>

        <Link to="/tasks">
          <button className="btn btn-success">
            Manage Tasks
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
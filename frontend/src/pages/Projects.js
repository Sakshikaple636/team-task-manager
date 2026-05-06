import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await API.get("/projects");
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const createProject = async (e) => {
    e.preventDefault();

    try {
      await API.post("/projects", projectData);

      alert("Project Created Successfully!");

      setProjectData({
        title: "",
        description: "",
      });

      fetchProjects();
    } catch (error) {
      alert("Project creation failed!");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Projects Management</h2>

      <div className="card shadow p-4 mb-4">
        <form onSubmit={createProject}>
          <div className="mb-3">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Project Title"
              value={projectData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Project Description"
              value={projectData.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Create Project
          </button>
        </form>
      </div>

      <div className="card shadow p-4">
        <h4 className="mb-3">All Projects</h4>

        <ul className="list-group">
          {projects.map((project) => (
            <li key={project.id} className="list-group-item">
              <strong>{project.title}</strong> - {project.description}
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

export default Projects;
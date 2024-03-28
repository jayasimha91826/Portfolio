import React from "react";
import './Project.css'

const Project = () => {
  return (
    <div>
      <h2 className="projectH2">Ninjago (08/2021 - Present)</h2>
      <div className="projectcontainer">
      <ul className="ulist">
        <li>
          I was part of a collaborative team that developed a tool specifically
          designed for our client to efficiently manage bank application
          servers.
        </li>
        <li>
          The primary focus of tool is to managing intricate details and
          functionalities of bank application servers.
        </li>
        <li>
          The tool encompasses a wide array of features, including
          comprehensive database details, server lifespan tracking, application
          specifics, server version management, and seamless operations for
          updating server details.
        </li>
        <li>
          All server operations will be efficiently managed through the
          application itself, ensuring streamlined and centralized control over
          server-related tasks.
        </li>
        <li>
          The application is seamlessly integrated with WLST (WebLogic
          Scripting Tool) code in the backend, enabling efficient management of
          server operations through automated scripting capabilities.
        </li>
      </ul>
    </div></div>
  );
};

export default Project;

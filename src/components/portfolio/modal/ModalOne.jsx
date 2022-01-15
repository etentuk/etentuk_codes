import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/portfolio/buggington_wide.PNG"
            })`,
          }}
        />
      </div>
      {/* End big image */}

      <div className="description">
        <h2>Buggington</h2>
        <h4>A bugtracker</h4>
        <p>
          Buggington is a defect tracking web application, also known as a
          bugtracker. During development we all encounter various issues, have
          different tasks to complete and various milestones to achieve. These
          tasks are what I defined as tickets within the application and a
          collection of tickets is then represented as a project. A ticket can
          only exist within a project and deleting a project will automatically
          delete all tickets assigned to it.
        </p>
        <p>
          Within an organization there are always different roles and access
          levels given to each person. I have also taken this into consideration
          and implemented a Role Based Access Control Authorization method.
        </p>
        <p>
          To achieve this I used Django Groups to create 4 groups which Users
          Can be assigned to. They are described below:
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>
                Admin: This is the highest level, an Admin can access all parts
                of the application. The Admin is the only user capable of
                changing the roles of other users within the application.
              </p>
            </li>
            <li>
              <p>
                Project Manager: This User manages and keeps tracks of the
                overall project and has the Architectural Vision to manage
                projects and see them to completion.
              </p>
            </li>
            <li>
              <p>
                Developer: Developers will mainly be focused on the task
                assigned to them, they are in charge of their tickets.They have
                full access to the Ticket interface along with read access to
                the projects.
              </p>
            </li>
            <li>
              <p>
                Submitter: These are the QA's who will report based on what they
                have evaluated from the work done by developers. They have the
                ability to create and edit Tickets as well as Read access to the
                projects.
              </p>
            </li>
          </ul>
        </div>
        <p>
          When you sign into the application you are first met with a quick
          summary of the tickets in the application grouped by Status, Type,
          Priority and Project. There are 5 primary Pages to Navigate to,
          Dashboard, Manage User Roles, Projects, Tickets and User Profile. The
          Manage User page is only visible to Users with a role of ADMIN. If any
          unauthorized users attempt to access this URL they get an Unauthorized
          Error Message.
        </p>

        <h3>Authentication</h3>
        <p>
          To access the application you can either register and sign in or use
          the Demo User Login function. As a demo user, you will be authorized
          to make all changes the role is allowed to, apart from password
          change.
        </p>

        <h2>Technologies</h2>
        <p>
          TypeScript, React, React Easy State, Python, Django, Django Rest
          Framework, Hosting on Heroku.
        </p>
      </div>
      <div className="edina_tm_button">
        <a target="_blank" href="https://buggington.herokuapp.com/login">
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ModalOne;

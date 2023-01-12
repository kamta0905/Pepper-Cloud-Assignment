import React from "react";
import NewTaskForm from "../components/NewTaskForm";

const NewTask = () => {
  return (
    <>
      <div>New Task</div>
      <div className="row">
        <NewTaskForm />
      </div>
    </>
  );
};

export default NewTask;

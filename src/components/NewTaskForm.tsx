import React, { useState } from "react";
import Select from "react-select";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import { Dropdown, Input, TextArea, Button } from "semantic-ui-react";
import { Form } from "react-bootstrap";
const NewTaskForm = () => {
  const [date, setDate] = useState("");
  const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
  ];
  const currentDate = new Date();
  return (
    <>
      <div className="col-md-6 mt-2">
        <div>
          <div className="d-flex mb-1">
            Task Type <span className="text-danger">* </span>
          </div>
          <Select placeholder="" options={techCompanies} />
        </div>
        <div className="mt-3">
          <div className="d-flex mb-1">
            Assigned to <span className="text-danger">* </span>
          </div>
          <Select placeholder="" options={techCompanies} />{" "}
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <div className="mb-1">Start Date</div>
            <Form.Control type="date" placeholder="date" />
          </div>
          <div className="col-md-6">
            <div className=" mb-1">End Date</div>

            <Form.Control type="date" placeholder=" date" />
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex mb-1">Remind On</div>
          <Form.Control type="date" placeholder="date" />
        </div>
      </div>

      <div className="col-md-6 mt-2">
        <div>
          <div className="d-flex mb-1">Subject</div>
          <Input className="w-100" placeholder="" />
        </div>

        <div className="mt-3">
          <div className="d-flex mb-1">Details</div>
          <TextArea placeholder="" className="w-100" style={{ minHeight: 200 }} />
        </div>
        <div className="w-100 mt-3 d-flex" id="select-option" style={{ justifyContent: "space-between" }}>
          <Button style={{ width: "150px" }} basic>
            Cancel
          </Button>

          <Button style={{ width: "150px" }} basic color="yellow">
            Apply
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewTaskForm;

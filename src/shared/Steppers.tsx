import React from "react";
import { Icon, Step } from "semantic-ui-react";
import checked from "../assets/checked.png";
import oval from "../assets/oval.png";
import dryClean from "../assets/dry-clean.png";

const Steppers = () => (
  <Step.Group size="small">
    <Step active>
      <Step.Content className="d-flex" style={{ justifyContent: "space-between" }}>
        <Step.Title className="py-2">Status 1</Step.Title>
        <div className="ms-3">
          <img src={checked} />
        </div>
      </Step.Content>
    </Step>

    <Step>
      <Step.Content className="d-flex" style={{ justifyContent: "space-between" }}>
        <Step.Title className="py-2">
          <div className="text-dark">New</div>
        </Step.Title>
        <div className="ms-3">
          <img src={dryClean} width={30} />
        </div>
      </Step.Content>
    </Step>

    <Step disabled>
      <Step.Content className="d-flex" style={{ justifyContent: "space-between" }}>
        <Step.Title className="py-2">Working</Step.Title>
        <div className="ms-3">
          <img src={oval} width={30} className="opacity-25" />
        </div>
      </Step.Content>
    </Step>
    <Step disabled>
      <Step.Content className="d-flex" style={{ justifyContent: "space-between" }}>
        <Step.Title className="py-2">Nurturing</Step.Title>
        <div className="ms-3">
          <img src={oval} width={30} className="opacity-25" />
        </div>
      </Step.Content>
    </Step>
    <Step disabled>
      <Step.Content className="d-flex" style={{ justifyContent: "space-between" }}>
        <Step.Title className="py-2">Converted</Step.Title>
        <div className="ms-3">
          <img src={oval} width={30} className="opacity-25" />
        </div>
      </Step.Content>
    </Step>
  </Step.Group>
);

export default Steppers;

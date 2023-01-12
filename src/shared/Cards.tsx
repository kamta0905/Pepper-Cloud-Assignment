import React from "react";
import { Card } from "semantic-ui-react";
import call from "../assets/call.png";
import check from "../assets/check.png";
import paste from "../assets/paste.png";
const items = [
  {
    id: 1,
    header: "Informed Product Features",
    description: "You contacted with Charles Gamez",
    meta: "13 Nov 2018   05:49 AM",
  },
  {
    id: 2,
    header: "Send Product Brochure",
    description: "You added to To Do task with Arun Var",
    meta: "10 Nov 2018   06:49 PM",
  },
  {
    id: 3,
    header: "Send Product Brochure",
    description: "You added to To Do task with Arun Var",
    meta: "10 Nov 2018   06:49 PM",
  },
  {
    id: 1,
    header: "Informed Product Features",
    description: "You contacted with Charles Gamez",
    meta: "13 Nov 2018   05:49 AM",
  },
  {
    id: 2,
    header: "Send Product Brochure",
    description: "You added to To Do task with Arun Var",
    meta: "10 Nov 2018   06:49 PM",
  },
  {
    id: 3,
    header: "Send Product Brochure",
    description: "You added to To Do task with Arun Var",
    meta: "10 Nov 2018   06:49 PM",
  },
];

const Cards = () => {
  return (
    <>
      {items.map((e) => {
        return (
          <>
            <Card>
              <Card.Content className="my-3">
                <div className="row">
                  <div className="col-1 mt-3 ms-3">
                    <img src={e.id === 2 ? call : e.id === 1 ? check : e.id === 3 ? paste : ""} alt="" />
                  </div>

                  <div className="col ms-4">
                    <div className="fw-bold">{e.header}</div>
                    <div className="opacity-50">{e.description}</div>
                    <div>{e.meta}</div>
                  </div>
                </div>
              </Card.Content>
            </Card>
            <div className="vr mt-1 mx-5 d-flex"></div>
            <div className="vr mx-5"></div>
          </>
        );
      })}
    </>
  );
};

export default Cards;

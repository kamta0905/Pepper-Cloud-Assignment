import React, { useState } from "react";
import { Menu, Segment, Card, Input, Dropdown } from "semantic-ui-react";
import Tabs from "./Tabs";
import HorizontalDivider from "../shared/HorizontalDivider";
import NewTask from "./NewTask";
import Header from "../shared/Header";
import DataTable from "./DataTable";
import Select from "react-select";
import Cards from "../shared/Cards";
const Menus = () => {
  const [activeItem, setActiveItem] = useState("ACTIVITY");
  const techCompanies = [
    { label: "Apple", value: 1 },
    { label: "Facebook", value: 2 },
    { label: "Netflix", value: 3 },
    { label: "Tesla", value: 4 },
    { label: "Amazon", value: 5 },
    { label: "Alphabet", value: 6 },
  ];

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item name="ACTIVITY" active={activeItem === "ACTIVITY"} onClick={() => setActiveItem("ACTIVITY")} />
        <Menu.Item
          name="INFORMATION"
          active={activeItem === "INFORMATION"}
          onClick={() => setActiveItem("INFORMATION")}
        />
      </Menu>
      <div className="row">
        <div className="col-md-8">
          <Header>
            <Card.Content>
              <Tabs />
            </Card.Content>
            <Card.Content>
              <NewTask />
              <HorizontalDivider />
              <DataTable />
            </Card.Content>
          </Header>
        </div>

        <div className="col-md-4">
          <Header className="overflow-scroll">
            <Card.Content>
              <Select placeholder="Filter by date" options={techCompanies} />
            </Card.Content>
            <Card.Content>
              <Cards />
            </Card.Content>
          </Header>
        </div>
      </div>
    </div>
  );
};

export default Menus;

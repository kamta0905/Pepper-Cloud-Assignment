import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Log Calls",
    // render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: "Tasks",
    // render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
  },
  {
    menuItem: "Events",
    // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
  {
    menuItem: "Make Note",
    // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
  {
    menuItem: "Add Attachment",
    // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
  {
    menuItem: "Activity Set",
    // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
  {
    menuItem: "Custom Field",
    // render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
  },
];

const Tabs = () => <Tab menu={{ secondary: true }} panes={panes} defaultActiveIndex={1} />;

export default Tabs;

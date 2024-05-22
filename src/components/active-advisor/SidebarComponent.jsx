import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


function SidebarComponent() {

  return (
    <div>
      
<br /><br />
      {/* <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="indoor" title="Indoor Activities">
          <Card style={{ width: "18rem", margin: "10px" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Racquetball</ListGroup.Item>
              <ListGroup.Item>Yoga</ListGroup.Item>
              <ListGroup.Item>Volleyball</ListGroup.Item>
              <ListGroup.Item>Tennis</ListGroup.Item>
              <ListGroup.Item>Basketball</ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
        <Tab eventKey="outdoor" title="Outdoor Activities">
          <Card style={{ width: "18rem", margin: "10px" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>Archery</ListGroup.Item>
              <ListGroup.Item>Yoga</ListGroup.Item>
              <ListGroup.Item>Football</ListGroup.Item>
              <ListGroup.Item>Volleyball</ListGroup.Item>
              <ListGroup.Item>Tennis</ListGroup.Item>
              <ListGroup.Item>Golf</ListGroup.Item>
              <ListGroup.Item>Basketball</ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
      </Tabs> */}
    </div>
  );
}

export default SidebarComponent;

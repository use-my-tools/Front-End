import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import ManageToolPage from "../components/main/ManageToolPage";
import styled from "styled-components";
import MyInventory from "./MyInventory";

const TabPageStyle = styled.div``;

class Tabpages extends Component {
  render() {
    return (
      <TabPageStyle>
        <Tabs onSelect={(index, label) => console.log(label + " selected")}>
          <Tab label="ALL TOOLS">
            <ManageToolPage />
          </Tab>
          <Tab label="MY INVENTORY">
            <MyInventory />
          </Tab>
        </Tabs>
      </TabPageStyle>
    );
  }
}

export default Tabpages;

import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap-tabs";
import ManageToolPage from "../components/main/ManageToolPage";
import styled from "styled-components";
import MyInventory from "./MyInventory";
import Alert from "react-s-alert";
import Map from "./Map";

const TabPageStyle = styled.div``;

class Tabpages extends Component {
  render() {
    return (
      <TabPageStyle>
        <Tabs onSelect={(index, label) => Alert.info(label + " selected")}>
          <Tab label="ALL TOOLS">
            <ManageToolPage />
          </Tab>
          <Tab label="MY INVENTORY">
            <MyInventory />
          </Tab>
          <Tab label="MAP">
            <Map />
          </Tab>
        </Tabs>
      </TabPageStyle>
    );
  }
}

export default Tabpages;

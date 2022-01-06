import * as React from "react";
import styles from "./style.module.css";
import TopBar from "../../components/TopBar";
import { Panel, PanelGroup } from "rsuite";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";
import Avatar from "react-avatar";
import { IoMan } from "react-icons/io5";
import { FaCat, FaDog } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className={styles.app}>
      <TopBar />

      <PanelGroup>
        <Panel className={styles.team}>
          <h3>Meet The Team</h3>
          <div className={styles.icons}>
            <FaDog size={"50px"}></FaDog>
            <FaCat size={"50px"}></FaCat>
            <IoMan size={"100px"}></IoMan>
            <FaCat size={"50px"}></FaCat>
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
            <Avatar size="150px" name="Keeley" />
            <PlaceholderParagraph />
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
            <Avatar size="150px" name="Inca" />
            <PlaceholderParagraph />
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
            <Avatar size="150px" name="Panda" />
            <PlaceholderParagraph />
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
            <Avatar size="150px" name="Paul" />
            <PlaceholderParagraph />
          </div>
        </Panel>
        <Panel></Panel>
      </PanelGroup>
    </div>
  );
}

import * as React from "react";
import styles from "./style.module.css";
import TopBar from "../../components/TopBar";
import { Panel, PanelGroup } from "rsuite";
import PlaceholderParagraph from "rsuite/esm/Placeholder/PlaceholderParagraph";
import Avatar from "react-avatar";
import { IoMan } from "react-icons/io5";
import { FaCat, FaDog } from "react-icons/fa";
import Keeley from "./Keeley.jpg";
import Inca from "./Inca.jpg";
import Panda from "./Panda.jpg";
import Paul from "./Paul.jpg";
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
            <div style={{ display: "block", textAlign: "center" }}>
              <h6 style={{ marginBlockEnd: "10px" }}>Regional Manager</h6>
              <Avatar size="150px" round={true} src={Paul} name="Paul" />
            </div>
            <PlaceholderParagraph rows={5} />
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "auto 200px" }}>
            <PlaceholderParagraph rows={5} />
            <div style={{ display: "block", textAlign: "center" }}>
              <Avatar size="150px" round={true} name="Amanda" />
              <h6 style={{ marginBlockStart: "10px" }}>
                Assistant Regional Manager
              </h6>
            </div>
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
            <div style={{ display: "block", textAlign: "center" }}>
              <h6 style={{ marginBlockEnd: "10px" }}>Salesman</h6>
              <Avatar size="150px" src={Panda} round name="Panda" />
            </div>
            <PlaceholderParagraph rows={5} />
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "auto 200px" }}>
            <PlaceholderParagraph rows={5} />
            <div style={{ display: "block", textAlign: "center" }}>
              <Avatar size="150px" src={Keeley} round name="Keeley" />
              <h6 style={{ marginBlockStart: "10px" }}>Salesman</h6>
            </div>
          </div>
        </Panel>
        <Panel>
          <div style={{ display: "grid", gridTemplateColumns: "200px auto" }}>
            <div style={{ display: "block", textAlign: "center" }}>
              <h6 style={{ marginBlockEnd: "10px" }}>Accountant</h6>
              <Avatar size="150px" src={Inca} round name="Inca" />
            </div>
            <PlaceholderParagraph rows={5} />
          </div>
        </Panel>
        <Panel></Panel>
      </PanelGroup>
    </div>
  );
}

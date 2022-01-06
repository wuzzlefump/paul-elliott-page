import * as React from "react";
import styles from "./style.module.css";
import TopBar from "../../components/TopBar";
import { Nav } from "rsuite";
export default function Portfolio() {
  const [active, setActive] = React.useState("code");
  return (
    <div className={styles.app}>
      <TopBar />
      <Nav
        className={styles.folder}
        activeKey={active}
        appearance={"tabs"}
        onSelect={(e) => {
          setActive(e);
        }}
      >
        <Nav.Item className={styles.tab} eventKey="code">
          Developing
        </Nav.Item>
        <Nav.Item className={styles.tab} eventKey="dance">
          Dancing
        </Nav.Item>
        <Nav.Item className={styles.tab} eventKey="fitness">
          Fitness
        </Nav.Item>
        <Nav.Item className={styles.tab} eventKey="sales">
          Sales
        </Nav.Item>
      </Nav>
      <div className={styles.folderBody}>
        <div className={styles.content}></div>
      </div>
    </div>
  );
}

const CodeResume = () => {
  return <>Resume will go here</>;
};
const DanceResume = () => {
  return <>Resume will go here</>;
};
const FitnessResume = () => {
  return <>Resume will go here</>;
};
const SalesResume = () => {
  return <>Resume will go here</>;
};

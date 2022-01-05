import * as React from "react";
import styles from "./style.module.css";
import { Navbar, Nav, Dropdown } from "rsuite";

export default function Dashboard() {
  return (
    <div className={styles.app}>
      <Navbar className={styles.navbar}>
        <Navbar.Brand style={{ fontFamily: "impact" }}>
          Paul Elliott
        </Navbar.Brand>
        <Nav pullRight>
          <Nav.Item>Home</Nav.Item>
          <Nav.Item>Memes</Nav.Item>
          <Nav.Item>Portfolio</Nav.Item>
          {/* <Nav.Item> Blog </Nav.Item> */}
        </Nav>
      </Navbar>
    </div>
  );
}

import { Navbar, Nav, Dropdown } from "rsuite";
import styles from "./style.module.css";

export default function TopBar() {
  return (
    <Navbar className={styles.navbar}>
      <Navbar.Brand style={{ fontFamily: "impact" }}>Paul Elliott</Navbar.Brand>
      <Nav pullRight>
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>Memes</Nav.Item>
        <Nav.Item>Portfolio</Nav.Item>
        {/* <Nav.Item> Blog </Nav.Item> */}
      </Nav>
    </Navbar>
  );
}

import { Navbar, Nav, Dropdown } from "rsuite";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import {IoIosMan} from "react-icons/io"

export default function TopBar() {
  const navigate = useNavigate();
  return (
    <Navbar className={styles.navbar}>
      <Navbar.Brand
        onClick={() => {
          navigate("/");
        }}
        style={{ fontFamily: "impact" }}
      >
        <IoIosMan style={{fontSize:"25px"}}/>
      </Navbar.Brand>
      <Nav pullRight>
        <Nav.Item
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          Portfolio
        </Nav.Item>
        <Nav.Item
          onClick={() => {
            navigate("/websites");
          }}
        >
          Website Gallery
        </Nav.Item>
        {/* <Nav.Item> Blog </Nav.Item> */}
      </Nav>
    </Navbar>
  );
}

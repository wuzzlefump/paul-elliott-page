import { Navbar, Nav, Dropdown } from "rsuite";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

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
        Paul Elliott
      </Navbar.Brand>
      <Nav pullRight>
        <Nav.Item
          onClick={() => {
            navigate("/home");
          }}
        >
          Home
        </Nav.Item>
        <Nav.Item>Memes</Nav.Item>
        <Nav.Item
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          Portfolio
        </Nav.Item>
        {/* <Nav.Item> Blog </Nav.Item> */}
      </Nav>
    </Navbar>
  );
}

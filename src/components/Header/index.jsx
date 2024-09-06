import { Button, Navbar } from "react-bootstrap";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropsTypes from "prop-types";

const Header = (props) => {

  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-4 mb-4 bg-white"
      expand
    >
      <Button variant="outline-secondary" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      {/* <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
          <Nav.Link href="#">page</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
      <Navbar.Collapse className="justify-content-end">
        {props.isLogin ? (
          <>
            <div className="d-flex gap-2">
              <Navbar.Text>
                Signed in as: <b>{props.username}</b>
              </Navbar.Text>
              <Button variant="outline-danger" onClick={props.onClickLogout}>Logout</Button>
            </div>
          </>

        ) : (
          <Button variant="outline-primary" onClick={props.onClickLogin}>Login</Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  toggle: PropsTypes.func,
  isLogin: PropsTypes.bool,
  username: PropsTypes.string,
  onClickLogin: PropsTypes.func,
  onClickLogout: PropsTypes.func
};

export default Header;

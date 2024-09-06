import { Button, Form, Modal } from "react-bootstrap";
import PropsTypes from "prop-types";
import { useEffect, useState } from "react";
import Input from "../Form/Input";

const INIT_LOGIN_DATA = { username: "", isLoginCrm: false };

const ModalLogin = (props) => {
  const [loginData, setLoginData] = useState(INIT_LOGIN_DATA);

  useEffect(() => {
    if (props.show) {
      setLoginData(INIT_LOGIN_DATA);
    }
  }, [props.show])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  const handleSwitch = (e) => {
    const { name, checked } = e.target;
    setLoginData({ ...loginData, [name]: checked });
  }

  const handleLogin = () => {
    props.onLogin(loginData);
  }

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          label="Username"
          type="text"
          name="username"
          className={"mb-3"}
          value={loginData.username}
          disabled={props.isLoading}
          onChange={handleChange}
        />
        <Form.Check
          type='checkbox'
          id={`is-login-crm`}
          label={'Login CRM'}
          name="isLoginCrm"
          onChange={handleSwitch}
          checked={loginData.isLoginCrm}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" disabled={props.isLoading} onClick={props.onClose}>
          Close
        </Button>
        <Button variant="primary" disabled={props.isLoading} onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  )
}


ModalLogin.propTypes = {
  show: PropsTypes.bool,
  onClose: PropsTypes.func,
  onLogin: PropsTypes.func,
  isLoading: PropsTypes.bool
}
export default ModalLogin;
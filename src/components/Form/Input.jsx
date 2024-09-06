import PropTypes from "prop-types"
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group className={props.className}>
      <Form.Label htmlFor={props.id}>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        disabled={props.disabled}
      />
      {
        props.desc && (
          <Form.Text muted>
            {props.desc}
          </Form.Text>
        )
      }
    </Form.Group>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  desc: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default Input;
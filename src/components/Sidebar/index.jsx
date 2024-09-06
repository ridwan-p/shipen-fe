import { Button, Nav } from "react-bootstrap"
import PropsTypes from "prop-types"
import classNames from "classnames";
import Menu from "./Menu";
import styles from "./index.module.scss"

const Sidebar = (props) => {

  return (
    <div className={classNames(styles["sidebar"], { [styles["is-open"]]: props.isOpen })}>
      <div className={styles["sidebar-header"]}>
        {props.logo && <img src={props.logo} alt="logo" className={styles["sidebar-logo"]} />}
        <div className={styles['sidebar-brand']}>
          <div className={styles['sidebar-brand-title']}>{props.brand.title}</div>
          {props.brand.desc && <div className={styles['sidebar-brand-desc']}>{props.brand.desc}</div>}
        </div>
        <Button
          variant="link"
          onClick={props.toggle}
          className={styles['close-button']}
        >
          <i className="bi bi-text-left"></i>
        </Button>
      </div>

      <Nav className="flex-column pt-2 px-2 w-100">
        {props.items.map((item, key) => (
          <Menu
            key={key}
            title={item.title}
            icon={item.icon}
            route={item.route}
            items={item.children}
            type={item.type}
            description={item.description}
            pathname={props.pathname}
          />
        ))}
      </Nav>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropsTypes.bool,
  toggle: PropsTypes.func,
  brand: PropsTypes.shape({
    title: PropsTypes.string,
    desc: PropsTypes.string
  }),
  logo: PropsTypes.string,
  items: PropsTypes.array,
  pathname: PropsTypes.string
};

export default Sidebar;
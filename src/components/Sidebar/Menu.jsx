import PropTypes from "prop-types";
import classNames from "classnames";
import { Nav } from "react-bootstrap";
import styles from "./index.module.scss"
import SubMenu from "./SubMenu";
import { Link, matchPath } from "react-router-dom";
import { TITLE_TYPE } from "../../constants/sidebar";

const Menu = (props) => {
  // show title
  if (props.type === TITLE_TYPE) {
    return (
      <Nav.Item>
        <div className={classNames('nav-link', styles['nav-title'])}>
          <div>{props.title}</div>
          {props.description && <div className={styles['description']}>{props.description}</div>}
        </div>
      </Nav.Item>
    )
  }

  const isMatchPath = matchPath(`${props.route}/*`, props.pathname);
  if (props.items?.length > 0) {
    return (
      <SubMenu
        title={props.title}
        icon={props.icon}
        items={props.items}
        route={props.route}
        collapsed={!!isMatchPath}
        pathname={props.pathname}
      />
    )
  }

  return (
    <Nav.Item>
      <Link to={props.route} className={classNames('nav-link', styles['nav-link'], { [styles['active']]: !!isMatchPath })}>
        {/* <FontAwesomeIcon className={classNames(styles['svg-inline--fa'], 'me-2',)} icon={props.icon} /> */}
        <div className="me-2">{props.icon}</div>
        <div className={styles['title']}>{props.title}</div>
      </Link>
    </Nav.Item>
  )
}


Menu.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  route: PropTypes.string,
  items: PropTypes.array,
  type: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string
};

export default Menu;
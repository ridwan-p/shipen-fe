import { useEffect, useState } from "react";
import { Link, matchPath } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Accordion, Nav, useAccordionButton } from "react-bootstrap";
import styles from './index.module.scss';

const EVENT_KEY = "0";

const SubMenu = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    if (props.collapsed) {
      setCollapsed(true)
    }
  }, [props.collapsed])

  const handleToggle = () => setCollapsed(!collapsed);

  return (
    <Nav.Item>
      <Accordion activeKey={collapsed ? EVENT_KEY : null}>
        <ButtonMenu
          title={props.title}
          icon={props.icon}
          collapsed={collapsed}
          eventKey={EVENT_KEY}
          route={props.route}
          onClick={handleToggle}
        />

        <Accordion.Collapse eventKey={EVENT_KEY}>
          <Nav className={classNames("flex-column")}>
            {props.items.map((item, key) => {
              const isMatchPath = matchPath(`${item.route}/*`, props.pathname);
              return (
                <Nav.Item key={key}>
                  <Link
                    to={item.route}
                    className={classNames("nav-link", styles['nav-link'], {
                      [styles['active']]: isMatchPath
                    })}
                  >
                    <i className={classNames("bi bi-dot")}></i>
                    <div className="ms-2">{item.title}</div>
                  </Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Accordion.Collapse>
      </Accordion>
    </Nav.Item>
  )
}

SubMenu.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
  icon: PropTypes.object,
  items: PropTypes.array,
  pathname: PropTypes.string,
  collapsed: PropTypes.bool
};

const ButtonMenu = (props) => {
  const decoratedOnClick = useAccordionButton(props.eventKey, (e) => {
    e.preventDefault()
    props.onClick(e)
  });

  return (
    <Accordion.Button
      className={styles['accordion-button']}
      onClick={decoratedOnClick}
    >
      <Nav.Link
        href={props.route}
        className={classNames(styles['nav-link'])}
      >
        <div className="me-2">{props.icon}</div>
        <div className={styles['title']}>{props.title}</div>
        <i className={classNames('bi', props.collapsed ? 'bi-chevron-up' : 'bi-chevron-down')}></i>
      </Nav.Link>
    </Accordion.Button>
  )
}


ButtonMenu.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  collapsed: PropTypes.bool,
  route: PropTypes.string,
  eventKey: PropTypes.string,
  onClick: PropTypes.func
};

export default SubMenu;
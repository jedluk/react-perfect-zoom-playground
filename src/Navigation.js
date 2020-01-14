import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const activeClass = (path, activePath) => (activePath === path ? 'nav-active' : undefined);
const Navigation = props => {
  const { pathname: activePath } = props.location;
  return (
    <ul className="navigation">
      <li className={activeClass('/', activePath)}>
        <Link to="/">Controller</Link>
      </li>
      <li className={activeClass('/demo', activePath)}>
        <Link to="/demo">Two sources</Link>
      </li>
    </ul>
  );
};

export default withRouter(Navigation);
